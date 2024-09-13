import React, { useEffect, useState } from "react";
import axios from "axios";
import { useList } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { capitalise, protectPage } from "../../frontend-helpers";
import firebase from "../../config/firebase-config";
import MenuButton from "../parts/MenuButton";
import GameModal from "../parts/GameModal";
import GameBoard from "../parts/GameBoard";
import GameHud from "../parts/GameHud";
import { PlayerType, CardType, SquareType, BattleType } from "../../frontend-types";
import GameMenu from "../parts/GameMenu";
import Battle from "../parts/Battle";

const Game = () => {
    const [authed, setAuthed] = useState<{authed:boolean,uid:string,loading?:boolean,expired:boolean}>({authed: false, uid:"none", loading:true, expired:false});
    const location = useLocation();
    const navigate = useNavigate();
    const gameName = location.pathname.split("/")[2];
    const gameRef = ref(firebase, `games/${gameName}`);
    const [gameSnapshot, loading, error] = useList(gameRef);
    const [select, setSelect] = useState<null|CardType>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [buyingOpen, setBuyingOpen] = useState<null|CardType>(null);
    const [viewing, setViewing] = useState<{view:string,players:{uid:string,username:string}[]}>({view: "", players:[]});
    const [cardMode, setCardMode] = useState(window.localStorage.getItem("cardMode")? window.localStorage.getItem("cardMode") as string:"view");
    const [gameID, setGameID] = useState("");
    const gameData:any = {};
    if (gameSnapshot) {
        gameSnapshot.forEach(snap => {
            const key = snap.key;
            const val = snap.val();
            if (key) gameData[key] = val;     
        });
    };
    
    if (error) console.log(error);

    useEffect(() => {
        if (!authed.authed) {
          protectPage().then((res) => {
            if (res.expired) {return navigate(`/profile?redirect=${location.pathname}`)};
            setAuthed(res);
          });
        };
    },[authed, navigate]);

    useEffect(() => {
        if (!viewing.view&&authed.authed&&gameData.players) {
            const players:{uid:string,username:string}[] = [];
            Object.keys(gameData.players).forEach(player => {
                players.push({uid:player, username:gameData.players[player].username||player});
            })
            setViewing({view:authed.uid,players});
        };
    },[authed, gameData, viewing.view])

    useEffect(() => {
        const onKeyUp = (e:KeyboardEvent) => {
            if (e.key === "Escape") {
                setMenuOpen(!menuOpen);
            };
        };
        window.addEventListener("keyup", onKeyUp, false);
        return () => {
            window.removeEventListener("keyup", onKeyUp, false);
        };
    },[setMenuOpen,menuOpen]);

    useEffect(() => {
        if (gameID) {
            axios.put(`${process.env.REACT_APP_API_ADDRESS}/endGame`,{gameName:gameData.gameName,player:authed.uid})
            navigate(`/endscreen/${gameID}`);
        };
    },[gameID]);

    if (!gameData.gameName&&!loading) {
        return (
            <div className={`app-page`}>
                <div id="game-backdrop" className="menu-backdrop" />
                <div className="container" style={{flexDirection: "column"}}>
                    <h2 className="title">This game must have ended!</h2>
                    <Link style={{textDecoration: "none"}} to={`/endscreen/${gameName}`}><button className="menu-button" >View Endscreen</button></Link>
                    <MenuButton />
                </div>
            </div>
        )
    };

    let player:PlayerType|null;
    if (gameData.players && authed.authed) {
        player = gameData.players[authed.uid];
    } else {player = null};
    const { whoTurn, battle } = gameData;
    if (loading||!gameData.players[viewing.view]||(!gameData.players[viewing.view].board&&!gameData.players[viewing.view].generalChoice)) return (
        <div className="page-container container">
            <div id="game-backdrop" className="menu-backdrop" />
            <div className="loading">Loading...</div>
        </div>
    );

    const placeCard = async (card:CardType, square:SquareType) => {
        if (!player) return;
        try {
            await axios.put(`${process.env.REACT_APP_API_ADDRESS}/player`, {
                player: player.uid, 
                updating: "placeCard",
                data: {card, square},
                gameName,
            });
            setSelect(null);
        } catch (err:any) {
            console.log(err.response.data);
        };     
    };

    const pickupCard = async (card:CardType, square:SquareType) => {
        if (!player || card.type==="general") return;
        try {
            await axios.put(`${process.env.REACT_APP_API_ADDRESS}/player`, {
                player: player.uid, 
                updating: "pickupCard",
                data: {card, square},
                gameName,
            });
            setSelect(card);
        } catch (err:any) {
            console.log(err.response.data);
        };     
    };

    const currentBattle:BattleType = battle.started? battle.battles.filter((bat:BattleType) => {return bat.players.filter(player => {return player.uid===authed.uid}).length})[0] :"";
    let oponentIndex:number=1;
    let playerIndex:number=0;
    let oponent:string = "none";
    if (battle.started) {
        oponent = currentBattle.players.filter((player:PlayerType,index) => {
            if (player.uid!==authed.uid) {
                oponentIndex = index;
                return true;
            };
            playerIndex = index;
            return false;
        })[0].uid;
    };

    const attackCard = async (card:CardType, square:SquareType) => {
        if (currentBattle.whoTurn!==authed.uid||!player||!select||select.team!==authed.uid) return;
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_ADDRESS}/updateBattle`, {
                player: player.uid, 
                updating: `${cardMode}`,
                data: {
                    attackedCard: {card, square},
                    attackingCard: {card: select},
                    oponent,
                },
                gameName,
            });
            if (res.data.id) setGameID(res.data.id); 
            setSelect(null);
            setCardMode("view");
        } catch (err:any) {
            console.log(err.response.data);
        };   
    };
    return (
            <div className={`app-page ${select&&battle&&!battle.started? "card-place-cursor":""} ${battle.started&&select&&cardMode!=="view"?cardMode==="attack"?"attack-cursor":"cast-cursor":""}`}>
                <div id="game-backdrop" className="menu-backdrop" />
                {authed.uid==="loading"?
                    <p>authenticating...</p>
                    :
                    player?
                        <>
                        <GameMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                        <GameHud 
                            buyingOpen={buyingOpen} 
                            setBuyingOpen={setBuyingOpen} 
                            whoTurn={whoTurn} 
                            player={player} 
                            gameName={gameName} 
                            select={select?select:null} 
                            setSelect={setSelect} 
                            shopOrder={gameData.shopOrder} 
                            cycleShop={gameData.cycleShop} 
                            setViewing={setViewing} 
                            viewing={viewing} 
                            view={viewing.view!==authed.uid}
                            viewHand={gameData.players[viewing.view].hand}
                            battling={battle?battle.started:false}
                            oponent={battle.started?{username:(gameData.players[oponent].username?gameData.players[oponent].username:capitalise(oponent)), uid:oponent}:{username:"",uid:""}}
                            cardNumber={gameData.players[viewing.view].board? gameData.players[viewing.view].board.cards.length:0}
                            battle={gameData.battle.started? gameData.battle.battles.filter((bat:BattleType) => {return bat.players.filter(player => {return player.uid===authed.uid}).length})[0]:""}
                            cardMode={cardMode}
                            setCardMode={setCardMode}
                        />    
                        <GameModal player={player} gameName={gameName} />
                        {viewing.view&&gameData.players[viewing.view].board?
                            gameData.battle.started?
                                <Battle 
                                setSelect={setSelect} 
                                playerBoard={currentBattle.players[playerIndex].board} 
                                enemyBoard={currentBattle.players[oponentIndex].board} 
                                ended={currentBattle.ended}
                                cardMode={cardMode} 
                                attackCard={attackCard}
                                select={select}
                                />
                                :
                                <GameBoard board={gameData.players[viewing.view].board} select={select?select:null} pickupCard={pickupCard} placeCard={placeCard} view={viewing.view!==authed.uid} />
                            :
                            <></>
                        }
                        </>
                    :
                    <>
                    <div>Please <Link to="/profile">login</Link> to play</div>
                    </>             
                }
            </div>
    );
}

export default Game;