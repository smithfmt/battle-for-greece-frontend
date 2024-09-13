import React, { FormEventHandler, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { protectPage, getFunName } from "../../frontend-helpers";
import LobbyService from "../../services/LobbyService";
import MenuButton from "../parts/MenuButton";
import { LobbyType } from "../../frontend-types";

const Host = () => {
  const [authed, setAuthed] = useState<{authed:boolean,uid:string,loading?:boolean,expired:boolean}>({authed: false, uid:"none", loading:true, expired:false});
  const navigate = useNavigate();
  const location = useLocation();
  const lobbyNameRef: React.RefObject<HTMLInputElement> = React.createRef();
  const playerCountRef: React.RefObject<HTMLSelectElement> = React.createRef();
  useEffect(() => {
    if (!authed.authed) {
      protectPage().then((res) => {
        if (res.expired) {return navigate(`/profile?redirect=${location.pathname}`)};
        setAuthed(res);
      });
    };
  },[authed, navigate]);
  
  const createLobby:FormEventHandler = async (e) => {
    if (!lobbyNameRef.current || !playerCountRef.current) return;
    e.preventDefault();
    const lobby:LobbyType = {
      lobbyName: lobbyNameRef.current.value,
      playerCount: parseInt(playerCountRef.current.value),
    };
    const res = await LobbyService.create(lobby);
    if (res.data.success) {
      navigate(`/lobby/${res.data.response}`);
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
        <strong className="title">Host</strong>
        <form autoComplete="off" spellCheck="false" onSubmit={(e) => createLobby(e)}> 
          <div className="menu-button focus" style={{width:"30vw"}}>
            <input className="menu-input" style={{width:"auto", textAlign:"center"}} type="text" ref={lobbyNameRef} name="lobbyName" required placeholder="Lobby Name" defaultValue={getFunName()} />
          </div>
          <div className="container" style={{justifyContent: "space-evenly"}}>
            <p>Number of players:</p>
            <select className="menu-button focus playercount-select" ref={playerCountRef}>
              <option value={2}>2</option>
              <option value={2}>4</option>
            </select>
          </div>
          
          <div className="container">
            <button className="menu-button profile-button" style={{color:"gold"}} type="submit">Create →</button>
          </div>
        </form>
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

export default Host;