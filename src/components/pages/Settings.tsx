import React from "react";
import MenuButton from "../parts/MenuButton";
import MuteButton from "../parts/MuteButton";

const Settings = () => {
    
    return (
            <div className="app-page">
                <div className="menu-backdrop" />
                <div className="menu-page bordered">
                    <strong className="title" style={{marginBottom:"1vw"}}>Settings</strong>
                    <div className="container">
                        <MuteButton />
                        <MuteButton silence={true} />
                    </div>
                    <MenuButton to="privacy-policy" id="privacy-policy" dot="true" content="privacy policy" />
                    <MenuButton />
                </div>
                
            </div>
    );
}

export default Settings;