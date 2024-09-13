import React, { useState } from "react";
import { playSound } from "../../sounds";

type Props = {
    silence?: boolean,
};

const MuteButton = ({ silence }: Props) => {
    const [mute, setMute] = useState(window.localStorage.getItem("muted")?true:false);
    const [silent, setSilent] = useState(window.localStorage.getItem("silent")?true:false);
    const muteMusic = () => {
        const muteEvent = new CustomEvent("mute");
        document.dispatchEvent(muteEvent);
        !mute? window.localStorage.setItem("muted", "muted"):window.localStorage.removeItem("muted");
        setMute(!mute);
    };
    const silentSound = () => {
        if (silent) {
            window.localStorage.removeItem("silent");
            setSilent(false);
        } else {
            window.localStorage.setItem("silent", "silent");
            setSilent(true);
        };        
    };
    if (silence) {
        return (
            <button 
                className={`mute-button silence menu-button ${silent? "silent":""}`} 
                onMouseEnter={() => playSound("buttonHover")} 
                onClick={silentSound} 
                id="mute" 
            />
        );
    } else {
        return (
            <button 
                className={`mute-button menu-button ${mute? "mute":""}`} 
                onMouseEnter={() => playSound("buttonHover")} 
                onClick={muteMusic} 
                id="mute" 
            />
        );
    };    
};

export default MuteButton;
