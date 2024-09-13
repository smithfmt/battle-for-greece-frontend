import { Howl } from "howler";

const sounds = ["button-hover"]; 
const sfx:any = {};
sounds.forEach((sound:string) => {
    sfx[sound] = require(`./music/sfx/${sound}.mp3`);
});

export const playSound = (sound:string) => {
    if (!window.localStorage.getItem("silent")) {
        const soundeffect = new Howl({
            src: [sfx[sound]],
            volume: 1,
        });
        soundeffect.play();
    };
};