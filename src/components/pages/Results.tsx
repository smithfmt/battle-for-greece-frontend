import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { protectPage } from "../../frontend-helpers";
import MenuButton from "../../components/parts/MenuButton";

const Results = () => {
    const [authed, setAuthed] = useState<{authed:boolean,uid:string,loading?:boolean,expired:boolean}>({authed: false, uid:"none", loading:true, expired:false});
    const navigate = useNavigate();
    const location = useLocation();
    const [games, setGames] = useState<{id:string,name:string,winner:string,general:string}[]|false>(false);
    
    useEffect(() => {
        if (!authed.authed) {
          protectPage().then((res) => {
            if (res.expired) {return navigate(`/profile?redirect=${location.pathname}`)};
            setAuthed(res);
          });
        };
    },[authed, navigate]);

    useEffect(() => {
        if (!games) {
            axios.get(`${process.env.REACT_APP_API_ADDRESS}/allResults`).then(
                res => {
                    console.log(res.data)
                    setGames(res.data.games.sort((a:string,b:string) => {return parseInt(b)-parseInt(a)}));
                }
            ).catch(e => console.log(e));
        };
    },[games]);
    
    return (
            <div className="app-page">
                <div className="menu-backdrop" />
                {authed.loading||!games? 
                    <p>Loading...</p>
                    :
                    authed.authed?
                    <div className="menu-page bordered">
                    <strong className="title">Results</strong>
                    <div className="leaderboard-container"> 
                        {games.length?
                        games.map(({ id, name, winner, general },index) => {
                            return (
                            <div key={`${index}ResultsCard`} className="results-card">
                                <div className="highlight">{name}</div>
                                <div>{`General: ${general}`}</div>
                                <div>{`Winner: ${winner}`}</div>
                                <div className="container" style={{width:"100%"}}>
                                    <Link to={`/endscreen/${id}`} className="menu-button profile-button">View Endscreen</Link>
                                </div>
                            </div>
                            );                        
                        })                    
                        :
                        <div>You have no game results</div>
                        }
                    </div>
                    <MenuButton />
                    </div>
                    :
                    <>
                    <div>Please <Link to="/profile">login</Link> to view</div>
                    </>
                }
            </div>
    );
};

export default Results;