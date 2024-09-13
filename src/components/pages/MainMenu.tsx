import React from "react";
import MenuButton from "../parts/MenuButton";
import MusicController from "../parts/MusicController";
const MainMenu = () => {
  return (
    <div className="app-page">
      <div className="menu-wrapper container">
        <div className="music-controller-container">
          <MusicController/>
        </div>
        <div className="menu-backdrop" />
        <div className="menu bordered">
            <strong className="title">Main Menu</strong>
            <MenuButton to="profile" id="profile" dot="true" content="profile" />
            <MenuButton to="host" id="host" dot="true" content="host game" />
            <MenuButton to="join" id="join" dot="true" content="join game" />
            <MenuButton to="settings" id="settings" dot="true" content="settings" />
            <MenuButton to="leaderboard" id="leaderboard" dot="true" content="leaderboard" />
            <MenuButton to="results" id="results" dot="true" content="results" />
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
