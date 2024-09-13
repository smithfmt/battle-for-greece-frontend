import React from "react";
import MenuButton from "./MenuButton";
import MusicController from "./MusicController";

type Props = {
    menuOpen: boolean,
    setMenuOpen: Function,
};

const GameMenu = ({ menuOpen, setMenuOpen }:Props) => {
    return (
        <div className={`game-menu-modal-outer container ${menuOpen? "open":""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div className="game-menu-modal-inner menu bordered">
                <MenuButton />
                <MusicController />
                <MenuButton to={"profile"} content={"Profile"} />
            </div>
        </div>
    );
};

export default GameMenu;