import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { protectPage } from "../../frontend-helpers";
import MenuButton from "../../components/parts/MenuButton";
import axios from "axios";
import GameBoard from "../parts/GameBoard";
import { BoardType, CardType, SquareType } from "../../frontend-types";

const Endscreen = () => {
    const [authed, setAuthed] = useState<{authed:boolean,uid:string,loading?:boolean,expired:boolean}>({authed: false, uid:"none", loading:true, expired:false});
    const [results, setResults] = useState<any>(false);
    const navigate = useNavigate();
    const location = useLocation();
    const gameID = location.pathname.split("/")[2];
    useEffect(() => {
        if (!authed.authed) {
          protectPage().then((res) => {
            if (res.expired) {return navigate("/profile")};
            setAuthed(res);
          });
        };
    },[authed]);
    
    useEffect(() => {
        if (!results) {
            axios.get(`${process.env.REACT_APP_API_ADDRESS}/results`, {params: {gameID}}).then(res => {
                setResults(res.data.gameData);
            }).catch(e => console.log(e));
        };
    },[]);
    const board:BoardType = {canPlace:[], cards:[]};
    if (results.cards) {
        Object.keys(results.cards).forEach(squ => {
            const square = squ.split("#").map(str => {return parseInt(str)});
            const card = results.cards[squ];
            board.cards.push({card,square});
        });
    };
    console.log(results)
    return (
            <div className="app-page">
                <div className="menu-backdrop" />
                {authed.loading? 
                    <p>Loading...</p>
                    :
                    authed.authed?
                        results?
                        <div className="endscreen-container menu bordered column">
                            <strong className="title">{results.gameName}</strong>
                            <div className="endscreen-content-container container">
                                <div className="name-display">Your army</div>
                                <GameBoard board={board}/>
                                <div className="endscreen-content bordered">
                                    <div>
                                        <div>{`Winner: `}</div>
                                        <div className="highlight">{results.winner}</div>
                                    </div>
                                    <div>
                                        <div>{`Battle wins: `}</div>
                                        <div className="highlight">{`${results.wins}/${results.winsToWin}`}</div>
                                    </div>   
                                    <div>
                                        <div>{`Turns: `}</div>
                                        <div className="highlight">{results.turnNumber}</div>
                                    </div>  
                                    <div>
                                        <div>{`Battle frequency: `}</div>
                                        <div className="highlight">{results.battleFrequency}</div>
                                    </div>
                                    {results.botMatch?
                                    <div className="highlight">{`Bot Match`}</div>
                                    :<></>}     
                                    {results.winnerUid===authed.uid?
                                    <div>
                                        <div>{`You Won!`}</div>
                                    </div>
                                    :<></>}                    
                                </div>
                            </div>
                            
                            <MenuButton />
                        </div>
                        :
                        <div>No Results found!</div>
                    :
                    <>
                    <div>Please <Link to="/profile">login</Link> to view results</div>
                    <MenuButton />
                    </>
                }
            </div>
    );
};

export default Endscreen;