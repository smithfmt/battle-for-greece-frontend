import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Howl } from "howler";
import $ from "jquery";
import MainMenu from "./MainMenu";
import Join from "./Join";
import Host from "./Host";
import Profile from "./Profile";
import Lobby from "./Lobby";
import Game from "./Game";
import Settings from "./Settings";
import Leaderboard from "./Leaderboard";
import Endscreen from "./Endscreen";
import Results from "./Results";
import { shuffle } from "../../frontend-helpers";
import { generals } from "../../data";

const musicSrc = [{title: "Evolution", auth: "Bensound"}, {title: "Birth of a Hero", auth: "Bensound"}, {title: "Climb", auth: "Shane Ivers"}, {title: "The Rise of Heroes", auth: "Shane Ivers"}, {title: "The Fall of Heroes", auth: "Shane Ivers"}, {title: "The Victory of Heroes", auth: "Shane Ivers"}, {title: "The Gatekeepers", auth: "Shane Ivers"}, {title: "Voyage of Discovery", auth: "Shane Ivers"}]; 
const songs = musicSrc.map(track => {return {src: require(`../../music/menu/${track.title}.mp3`), ...track}});

const App = () => {
    useEffect(() => {
        let playlist = [...songs];
        let music:any;
        let track = 0;
        const nextTrack = () => {
            track = (track+1)===playlist.length?0:track+1;
            playMenuMusic();
        };
        const shuffleTracks = () => {
            if (window.localStorage.getItem("shuffled")) {
                playlist = shuffle(playlist);
            } else {
                playlist = [...songs];
            };
            playMenuMusic();
        };
        const playMenuMusic = () => {
            const song = playlist[track];
            if (music) {music.stop()};
            music = new Howl ({
                src: [song.src],
                autoplay: true,
                volume: 0.1,
                onend: () => {nextTrack()},
            });
            if (window.localStorage.getItem("muted")) {
                music.mute(true);
            };
            document.dispatchEvent(new CustomEvent("playingSong", {detail: {title: song.title}}))
            window.localStorage.setItem("song", song.title);
        };
        shuffleTracks();
        
        $(document).on("mute", () => {
            music.mute(window.localStorage.getItem("muted")?false:true);
        });
        $(document).on("shuffle", shuffleTracks);
        $(document).on("next", nextTrack);
        // const manualScroll = (event:JQuery.Event) => {
        //     if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === "=" ) ) {
        //         event.preventDefault();
        //     };
        // };

        // $(document).on("keydown", manualScroll);
        // return (() => {
        //     $(document).off("keydown", manualScroll);
        // });  
    }, []);  
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMenu/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/host" element={<Host/>} />
                <Route path="/join" element={<Join/>} />
                <Route path="/settings" element={<Settings/>} />
                <Route path="/leaderboard" element={<Leaderboard/>} />
                <Route path="/results" element={<Results/>} />
                <Route path="/lobby/:lobby" element={<Lobby/>} />
                <Route path="/game/:game" element={<Game/>} />
                <Route path="/endscreen/:endscreen" element={<Endscreen/>} />
                <Route path="/cards" element={<div className="column">{
                    generals.map(cd => {return cd.name}).sort().map(name => {return (<p key={name}>{name}</p>)})
                }</div>} />
                <Route element={<MainMenu/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;