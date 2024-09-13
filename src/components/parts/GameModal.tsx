import React from "react";
import axios from "axios";
import Card from "./Card";
import { PlayerType, CardType } from "../../frontend-types";

type Props = {
    player: PlayerType,
    gameName: string,
};

const GameModal = ({ player, gameName }:Props) => {
    if (!player || (!player.generalChoice)) return <></>;

    const selectGeneral = async (general: CardType) => {
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_ADDRESS}/player`, {
                player: player.uid, 
                updating: "general",
                data: {card: general, square: [0,0]},
                gameName,
            });
            console.log(res.data);
        } catch (err:any) {
            console.log(err.response.data);
        };          
    };

    return (
        <div className="game-modal open"> 
            {player.generalChoice?
                <>
                <strong className="title">
                    Choose Your General!
                </strong>
                <div className="game-modal-inner">
                    {player.generalChoice.map(general => {
                        console.log(general)
                        return (<Card key={general.name} card={general} select={true} onClick={() => selectGeneral(general)} />)
                    })}
                </div>
                </>
                :
                <p className="title">Loading...</p>
            }                                                
        </div>
    );
};

export default GameModal;