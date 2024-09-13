import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import Hourglass from "../../images/Game/hud/hourglass.png";
import CardDeck from "../../images/Game/hud/cardDeck.png";
import CardDeckGlow from "../../images/Game/hud/cardDeckGlow.png";
import CardDeckTop from "../../images/Game/hud/cardDeckTop.png";
import ShopIcon from "../../images/Game/hud/ShopIcon.png";
import ShopIconGlow from "../../images/Game/hud/ShopIconGlow.png";
import Card from "./Card";
import { BattleType, CardType, PlayerType } from "../../frontend-types";
import Shop from "./Shop";
import { generateMatrixes, capitalise } from "../../frontend-helpers";

type Props = {
    whoTurn: string,
    player: PlayerType,
    gameName: string,
    select: CardType|null,
    setSelect: Function,
    shopOrder: CardType[],
    buyingOpen: CardType|null,
    setBuyingOpen: Function,
    cycleShop: number,
    viewing: {view:string, players:{uid:string,username:string}[]},
    view: boolean,
    setViewing: Function,
    viewHand: CardType[],
    cardNumber: number,
    battling: boolean,
    oponent: {username:string, uid:string},
    battle: BattleType,
    cardMode: string,
    setCardMode: Function,
};

const GameHud = ({ 
    whoTurn, 
    player, 
    gameName, 
    select, 
    setSelect, 
    shopOrder, 
    buyingOpen, 
    setBuyingOpen, 
    cycleShop, 
    viewing, 
    setViewing, 
    view, 
    viewHand, 
    cardNumber, 
    battling, 
    oponent, 
    battle, 
    cardMode, 
    setCardMode,
}: Props) => {
    const [shopOpen, setShopOpen] = useState(false);
    const [payment, setPayment] = useState<CardType[]>([]);
    const [hand, setHand] = useState<CardType[]>([]);
    const [canBuy, setCanBuy] = useState(false);
    
    const [battleSelectToggle, setBattleSelectToggle] = useState(window.localStorage.getItem("battleSelectToggle")? window.localStorage.getItem("battleSelectToggle") as string:"closed");

    useEffect(() => {
        if (player.hand) {
            setHand(viewHand);
        } else setHand([]);
    },[buyingOpen, player, viewHand]);

    useEffect(() => {
        const calcPaid = () => {
            if (!buyingOpen) return;
            let { costArr } = buyingOpen;
            if (!costArr) return;
            const paid = payment.map(cd => {
                let res:string[] = [];
                if (cd.red) res.push("red");
                if (cd.green) res.push("green");
                if (cd.blue) res.push("blue");
                return res;
            });
            const compare = (req:string[], pay:string[][]) => {
                if (req.includes("gold")||req.includes("white")) {
                    if (req.length===pay.length) return true;
                    return false;
                };
                let requirements = [...req];
                const singles = pay.filter(arr => {return arr.length===1}).map(arr => {return arr[0]});
                singles.forEach(sing => {
                    if (requirements.includes(sing)) {
                        requirements.splice(requirements.indexOf(sing),1);
                    } else return false;
                });
                if (singles.length&&!requirements.length) return true;
                const complex = pay.filter(arr => {return arr.length>1});
                const testMatrixes = generateMatrixes([0,1,2],complex.length, true);
                let success = false;
                let end = false;
                let iterations = 0;
                while (!success&&!end&&iterations<testMatrixes.length) {
                    const matrix = testMatrixes[iterations];
                    if (matrix===undefined) end=true;
                    const compareMatrix = complex.map((arr, i) => {return(arr[matrix[i]])});
                    if (matrix && _.isEqual(requirements, compareMatrix)) success = true;
                    iterations++;
                };
                return success;
            };
            setCanBuy(compare(costArr, paid));
        };
        calcPaid();
    }, [payment, buyingOpen])

    const notMyTurn = whoTurn!==player.uid;
    const nextTurn = async () => {
        if (notMyTurn) return;
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_ADDRESS}/nextTurn`, {
               gameName, 
            });
            console.log(res.data);
        } catch (err:any) {
            console.log(err.response.data);
        };          
    };

    const drawBasicCard = async () => {
        if (notMyTurn || player.drawnBasic) return;
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_ADDRESS}/drawBasic`, {
               gameName,
            });
            console.log(res.data);
        } catch (err:any) {
            console.log(err.response.data);
        };   
    };

    const selectCard = async (card:CardType) => {
        setSelect(card);
    };

    const toggleShopModal = () => {
        setShopOpen(!shopOpen);
    };

    const addToHand = (card:CardType) => {
        setHand([...hand, card]);
    };

    const removeFromHand = (card:CardType) => {
        let newHand = hand.filter(cd => {
            return !_.isEqual(card, cd);
        });
        setHand(newHand);
    };

    const removeFromPayment = (card:CardType) => {
        let newPayment = payment.filter(cd => {
            return !_.isEqual(card, cd);
        });
        setPayment(newPayment);
    };

    const clickHandCard = (card:CardType) => {
        if (buyingOpen) {
            if (payment.length===buyingOpen.cost) return;
            setPayment([...payment, card]);
            removeFromHand(card)
            return;
        };
        selectCard(card);
    };

    const buyCard = async () => {
        if (!canBuy) return;
        try {
            await axios.put(`${process.env.REACT_APP_API_ADDRESS}/player`, {
                player: player.uid, 
                updating: "buyCard",
                data: {card: buyingOpen, payment},
                gameName,
            });
            setPayment([]);
            setShopOpen(false);
        } catch (err:any) {
            console.log(err.response.data);
        };    
    };

    const cycleView = () => {
        let players = viewing.players;
        players.push(viewing.players.shift() as {uid:string,username:string});
        const view = players[0].uid;
        setSelect(null);
        setViewing({view,players});
    };

    let nextTurnInfoMessage = "End turn";
    let cardDrawMessage = "Draw Basic Card";
    if (notMyTurn) {
        nextTurnInfoMessage = "Waiting for other players";
        cardDrawMessage = "Waiting for other players";
    };
    if (!player.goodPlacement) {
        nextTurnInfoMessage = "Illegal card placement"
    }
    if (player.drawnBasic) {
        cardDrawMessage = "Already Drawn Card";
    };
    let handNum=0;

    // Battle Functions

    const endBattleTurn = async () => {
        if (notMyBattleTurn) return;
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_ADDRESS}/endBattleTurn`, {
               gameName, 
               uid: player.uid,
            });
            console.log(res.data);
        } catch (err:any) {
            console.log(err.response.data);
        };      
    };

    let endBattleTurnMessage = "End turn";
    const notMyBattleTurn = battle.whoTurn!==player.uid;
    const changeCardMode = () => {
        if (cardMode==="view"&&select&&select.team!==player.uid) setSelect(null);
        let modes = ["view", "attack", "cast"];
        let currentIndex = modes.indexOf(cardMode);
        let newCardMode = currentIndex>1?modes[0]:modes[currentIndex+1];
        window.localStorage.setItem("cardMode", newCardMode);
        if (player.attacked&&newCardMode==="attack") {
            newCardMode = "cast";
        };
        if (player.cast&&newCardMode==="cast") {
            newCardMode = "view";
        };
        return setCardMode(newCardMode);
    };
    const toggleBattleSelect = () => {
        let newToggle = "closed";
        if (battleSelectToggle==="closed") newToggle = "";
        window.localStorage.setItem("battleSelectToggle", newToggle);
        return setBattleSelectToggle(newToggle);
    };

    return (
        <div className="game-hud-container">
            {battling?
                // Battle HUD
                <>
                <div className={`name-display ${battle.whoTurn===player.uid?"":"faded"}`}>
                    {capitalise(player.username)}
                </div>
                <div className={`name-display oponent ${battle.whoTurn===oponent.uid?"":"faded"}`}>
                    {oponent.username}
                </div>
                <button onClick={endBattleTurn} className={`${notMyBattleTurn? "not-my-turn":""} ${player.goodPlacement?"":"bad-placement"} menu-button next-turn-button game-hud container`}>
                    {notMyBattleTurn? <img src={Hourglass} alt="hourglass"/>:"→"}
                    <div className="next-turn-info container">
                        {endBattleTurnMessage}
                    </div>
                </button>
                <div className="card-mode-container container">
                    <button className={`menu-button`} onClick={changeCardMode}>
                        {capitalise(cardMode)} 
                    </button>
                </div>
                {select?
                    <>
                    <div className={`battle-select-container ${battleSelectToggle} container`}>
                        <Card card={select} select={true} />
                        <button onClick={toggleBattleSelect} className="battle-select-toggle menu-button">
                            {battleSelectToggle?`>`:`<`}
                        </button>
                    </div>
                    
                    </>
                    :
                    <></>
                }
                </>
                :
                // Standard HUD
                <>
                {select?
                    <div className="select-to-place-container">
                        <Card card={select} select={true}/>
                    </div>
                    :
                    <></>
                }
                <button onClick={toggleShopModal} className={`shop-button game-hud container`}>
                    {<img src={shopOpen?ShopIcon:ShopIconGlow} alt="shopIcon" className="shop-icon"/>}
                    <p>{shopOpen?"Close":"Shop"}</p>
                    {shopOpen?
                        <></>
                    :
                        <div className="next-turn-info container">
                            {cardDrawMessage}
                        </div>
                    }
                </button>
                <button className="menu-button cycle-view-button" onClick={cycleView}>
                    {`→`}
                    <div className="next-turn-info container">
                        {`View ${viewing.players.length?viewing.players[1].uid===player.uid?"Your":`${capitalise(viewing.players[1].username)}'s`:""} board`}
                    </div>
                </button>
                <button onClick={drawBasicCard} className={`draw-button game-hud container`}>
                    {<img src={player.drawnBasic||notMyTurn?CardDeck:CardDeckGlow} alt="cardDeck" className="card-deck"/>}
                    {<img src={CardDeckTop} alt="cardDeckTop" className={`card-deck-top ${player.drawnBasic? "":"can-draw"}`}/>}
                    <div className="next-turn-info container">
                        {cardDrawMessage}
                    </div>
                </button>
                <button onClick={nextTurn} className={`${notMyTurn? "not-my-turn":""} ${player.goodPlacement?"":"bad-placement"} menu-button next-turn-button game-hud container`}>
                    {notMyTurn? <img src={Hourglass} alt="hourglass"/>:player.goodPlacement?"→":"x"}
                    <div className="next-turn-info container">
                        {nextTurnInfoMessage}
                    </div>
                </button>
                <div className="name-display">
                    {viewing.players.length?capitalise(viewing.players[0].username):""}
                </div>
                <div className="card-number">
                    {`${cardNumber}/10`}
                </div>
                {shopOpen?
                    <Shop 
                        setShopOpen={setShopOpen} 
                        setBuyingOpen={setBuyingOpen} 
                        buyingOpen={buyingOpen} 
                        shopOrder={shopOrder} 
                        payment={payment} 
                        setPayment={setPayment}
                        addToHand={addToHand}
                        removeFromPayment={removeFromPayment}
                        buyCard={buyCard}
                        canBuy={canBuy}
                        cycleShop={cycleShop}
                    />
                :<></>}
                {hand?
                    <div className={`player-hand-container game-hud ${select?"select":""} ${buyingOpen? "buy-open": ""} ${view?"viewing":""}`} onClick={() => {
                        if (select) {
                            setSelect(null);
                        };
                    }}>
                        {hand.map(card => {
                            handNum++;
                            return (
                                <div key={`hand-${card.name}-${handNum}`} className="hand-card-container" onClick={() => clickHandCard(card)}>
                                    <Card style={{ zIndex: handNum }} key={`${card.name}-hand-${handNum}`} card={card} hand={true}/>
                                    <Card key={`${card.name}-hand-${handNum}-big`} card={card} hand={true} display={true} />
                                </div>
                            );
                        })}
                    </div>
                    :<></>
                }
                </>
            }
        </div>
    );
};

export default GameHud;