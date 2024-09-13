import React, { useEffect, useState } from "react";
import MuteButton from "./MuteButton";
const MusicController = () => {
    const [track, setTrack] = useState(localStorage.getItem("song"));
    const [shuffled, setShuffled] = useState(localStorage.getItem("shuffled")||false);
    useEffect(() => {
        document.addEventListener("playingSong", (e) => {
            setTrack((e as CustomEvent).detail.title);
        });
    },[]);
    const nextTrack = () => {
        const nextEvent = new CustomEvent("next");
        document.dispatchEvent(nextEvent);
    };
    const shuffle = () => {
        if (localStorage.getItem("shuffled")) {
            localStorage.removeItem("shuffled");
            setShuffled(false);
        } else {
            localStorage.setItem("shuffled", "shuffle");
            setShuffled(true);
        };        
        const shuffleEvent = new CustomEvent("shuffle");
        document.dispatchEvent(shuffleEvent);
    };
    return (
        <div className="menu-button music-controller">
            <div className="track-title-container">
                <div className="note">{`♫`}</div>
                <div className="track-title">{`${track}`}</div>
            </div>
            
            <div className="music-controls">
                <button onClick={shuffle} className={`${shuffled? "shuffled": ""} shuffle-button mute-button menu-button`} />
                <button onClick={nextTrack} className="next-track-button mute-button menu-button"><div className="next-track-icon"></div></button>
                <MuteButton/>
            </div>
        </div>
    );
};

export default MusicController;