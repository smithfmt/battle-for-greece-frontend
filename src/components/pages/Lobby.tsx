import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useList } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
import firebase from "../../config/firebase-config";
import { protectPage } from "../../frontend-helpers";
import LobbyService from "../../services/LobbyService";
import MenuButton from "../parts/MenuButton";
import { PlayerType } from "../../frontend-types";

const Lobby = () => {
    const [authed, setAuthed] = useState<{authed:boolean,uid:string,loading?:boolean,expired:boolean}>({authed: false, uid:"none", loading:true, expired:false});
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!authed.authed) {
          protectPage().then((res) => {
            if (res.expired) {return navigate(`/profile?redirect=${location.pathname}`)};
            setAuthed(res);
          });
        };
    },[authed, navigate]);
    const lobbyName = location.pathname.split("/")[2];
    const lobbyRef = ref(firebase, `lobbies/${lobbyName}`);
    const [lobbySnapshot, loading, error] = useList(lobbyRef);
    const lobbyData:any = {};

    if (lobbySnapshot) {
        lobbySnapshot.forEach(snap => {
            const key = snap.key;
            const val = snap.val();
            if (key) lobbyData[key] = val;
        });
    };
    
    if (error) console.log(error);

    const [starting, setStarting] = useState(false);
    const start = () => {
        setStarting(true);
        setTimeout(() => {
            navigate(`/game/${lobbyName}`);
        }, 500);
    };

    const startGame = async (botNumber:number) => {
        const res = await LobbyService.start(lobbyName, botNumber);
        if (res.data.success) {
            start();
        } else {
            console.log(res.data);
        };
    };

    const leaveGame = async () => {
        const res = await LobbyService.leave("lobby", lobbyName, authed.uid);
        if (res.error) return console.log(res.error);
        navigate("/");
    };

    return (
            <div className="app-page">
                <div className="menu-backdrop" />
                <div className="menu-page bordered">
                {authed.loading? 
                    <p>Loading...</p>
                    :
                    authed.authed?
                    <>
                    {starting?
                        <h2 className="highlight">Game Starting!</h2>
                        :
                        loading?
                            <p>Loading...</p>
                            :
                            lobbyData.starting?
                            start()
                            :
                            lobbyData.players?
                                <>
                                <h2 className="title highlight">{lobbyData.lobbyName}</h2>
                                <p><strong className="highlight">{`${lobbyData.players.length}/${lobbyData.playerCount}`}</strong>{` players joined`}</p>
                                <div>
                                    Players in Lobby:
                                    {lobbyData.players.map((player:PlayerType) => {
                                        return (
                                            <p className="highlight" style={{marginLeft:"2vw"}} key={player.uid}>{`- ${player.username}`}</p>
                                        );
                                    })}
                                </div>
                                {lobbyData.host===authed.uid?
                                    lobbyData.players.length===lobbyData.playerCount?
                                        <button className="menu-button" style={{color:"gold"}} onClick={() => startGame(0)} >Start Game</button>
                                        :
                                        <button className="menu-button" style={{color:"gold"}} onClick={() => startGame(lobbyData.playerCount-lobbyData.players.length)} >Start Game with Bots</button>
                                    :<p>Please wait for the host to start the game</p>
                                }
                                <button className="profile-button menu-button" onClick={leaveGame}>Leave</button>
                                </>
                                :
                                <>
                                <p>No lobby Here!</p>
                                <button className="menu-button profile-button" onClick={() => navigate("/join", { replace: false })} id="join">Back to Join →</button>
                                </>
                    }
                    </>
                    :
                    <>
                    <div>Please <Link to="/profile">login</Link> to play</div>
                    </>
                }
                <MenuButton />
                </div>
            </div>
    );
}

export default Lobby;