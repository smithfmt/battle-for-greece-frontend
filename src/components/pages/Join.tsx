import React, { useEffect, useState } from "react";
import { ref } from "firebase/database";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useList } from "react-firebase-hooks/database";
import LobbyService from "../../services/LobbyService";
import firebase from "../../config/firebase-config";
import { protectPage } from "../../frontend-helpers";
import MenuButton from "../parts/MenuButton";

const Join = () => {
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

  const lobbiesRef = ref(firebase, "lobbies");
  const [lobbies, loading, error] = useList(lobbiesRef);
  if (error) console.log(error);
  
  const joinLobby = async (lobbyName:string) => {
    const res = await LobbyService.join(lobbyName);
    if (res.data.success || res.data.msg==="This player is already in this lobby") {
      navigate(`/lobby/${lobbyName}`)
    } else {
      console.log(res.data);
    };
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
            <strong className="title" style={{marginBottom: "1vw"}}>Join</strong>
            {loading||!lobbies?
              <p>Loading...</p>
              :
              lobbies.length?
                <div className="lobby-card-container">
                {lobbies.map(lobby => {
                  const { lobbyName, playerCount, players } = lobby.val();
                  return (
                    <div className="lobby-card" key={lobbyName}>
                      <strong className="highlight">{lobbyName.length>20?lobbyName.slice(0,20)+"...":lobbyName}</strong>
                      <div className="flex" style={{justifyContent: "space-between"}}>
                        <p>{`${players?players.length:0}/${playerCount}`}</p>
                        <button className="profile-username-submit" style={{position:"relative"}} onClick={() => joinLobby(lobbyName)}>→</button>
                      </div>
                      
                    </div>
                  )
                })}
                </div>
                :
                <>
                <p>No lobbies to join</p>
                <button className="menu-button profile-button" onClick={() => navigate("/host", { replace: false })} id="host">Host</button>
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

export default Join;