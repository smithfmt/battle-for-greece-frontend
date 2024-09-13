import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuButton from "../parts/MenuButton";
import { UserType } from "../../frontend-types";

const Leaderboard = () => {
    const [users, setUsers] = useState<UserType[]|undefined>(undefined);

    const fetchLeaderboard = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_ADDRESS}/leaderboard`);
            console.log(res.data);
            setUsers(res.data.users);
        } catch (err: any) {
            console.log(err.reponse.data);
        };
    };
    useEffect(() => {
        fetchLeaderboard();
    }, []);  
    let pos = -1;
    const places = ["gold", "silver", "rgb(197, 112, 43)"];
    if (!users) {
        return (
            <div className="app-page">
                <div className="menu-backdrop" />
                <div className="title">Loading...</div>
            </div>
        )
    }
    return (
            <div className="app-page">
                <div className="menu-backdrop" />
                <div className="menu-page bordered">
                    <strong className="title" style={{marginBottom:"1vw"}}>Leaderboard</strong>
                    {users?
                        <div className="leaderboard-container">
                            {users.sort((a,b) => {
                                if (a.wins&&b.wins&&b.wins-a.wins!==0) {
                                    return b.wins-a.wins;
                                };
                                return a.games?Object.keys(a.games).length:0 - b.games?Object.keys(b.games).length:0;
                            }).map(user => {
                            const { username, wins } = user;
                            const games = user.games?Object.keys(user.games).length:0;
                            pos++;
                            return (games?
                                <div className="leaderboard-card" key={username}>
                                    <strong style={{color: `${places[pos]||"white"}`}}>{username}</strong>
                                    <div className="container" style={{justifyContent: "space-between", width: "15vw", position:"relative"}}>
                                        <p>{`${wins} Wins`}</p>
                                        <div className="wg-container">
                                            <p>{`${Math.floor(100*(wins/games))/100} w/g`}</p>
                                            <p className="wg-info">Wins per Game</p>
                                        </div>
                                    </div>
                                </div>
                            :"");
                            })}
                        </div>
                        :
                        <p>Loading...</p>
                    }
                    <MenuButton />
                </div>
                
            </div>
    );
}

export default Leaderboard;