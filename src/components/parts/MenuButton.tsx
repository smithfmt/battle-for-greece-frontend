import React from "react";
import { useNavigate } from "react-router-dom";
import { playSound } from "../../sounds";

type Props = {
    to?: string,
    sound?: string,
    id?: string,
    dot?: string,
    content?: string,
};

const MenuButton = ({ to, sound, id, dot, content }: Props) => {
    const navigate = useNavigate();
    return (
        <button 
            className={`menu-button ${id?"":"main-menu-button"}`}
            onMouseEnter={() => playSound(sound||"button-hover")} 
            onClick={() => navigate(`/${to||""}`, { replace: false })} 
            id={id||"main-menu-button"}>
                {dot?<div className="dot" />:""}
                {content||"Return to Main Menu →"}
        </button>   
    );
}

export default MenuButton;
