import React, { MouseEventHandler } from "react";
import { colors, colorConvert, connectImages } from "../../frontend-helpers";
import BorderDesign from "../../images/Card/BorderDesign.png";
import BackgroundTexture from "../../images/Card/BackgroundTexture.png";
import redBackdrop from "../../images/Card/redBackdrop.png";
import greenBackdrop from "../../images/Card/greenBackdrop.png";
import blueBackdrop from "../../images/Card/blueBackdrop.png";
import goldBackdrop from "../../images/Card/goldBackdrop.png";
import Circle from "../../images/Card/circle.png";
import Bolt from "../../images/Card/Bolt.png";
import Passive from "../../images/Card/Passive.png";
import Defence from "../../images/Card/Defence.png";
import Attack from "../../images/Card/Attack.png";
import { CardType } from "../../frontend-types";

const backdropImages: {[key: string]: string} = {
    redBackdrop, greenBackdrop, blueBackdrop, goldBackdrop
};

type Props = {
    card: CardType,
    select?: boolean,
    onClick?: MouseEventHandler,
    hand?: boolean,
    display?: boolean,
    style?:Object,
    payment?:boolean,
};

const Card = ({ card, select, onClick, hand, display, style, payment }: Props) => {
    const { connections, background, color, activeConnections } = card;
    let backgroundColors = background;
    let CardSrc;
    try {
        CardSrc = require(`../../images/Cards/${card.img}.png`);
    } catch {
        CardSrc = require(`../../images/Cards/${card.img}.jpg`);
    };
    let connects = connections.map((col) => {return colors[col]});
    if (card.type==="battle") {
        backgroundColors = ["10, 10, 10","10, 10, 10","10, 10, 10","10, 10, 10",];
    };
    // let posRef = ["top", "right", "bottom", "left"];
    return (
        <div style={style} className={`card-container ${select?"select":hand?"hand":""} ${display? "display":""} ${payment? "payment":""}`} onClick={onClick} key={card.name} >
            <div className="card-background" style={{
                backgroundImage: BackgroundTexture,
                borderTopColor: `rgba(${colors[backgroundColors[0]]}, ${card.type==="battle" ? 0.7 : 0.3})`,
                borderRightColor: `rgba(${colors[backgroundColors[1]]}, ${card.type==="battle" ? 0.7 : 0.3})`,
                borderBottomColor: `rgba(${colors[backgroundColors[2]]}, ${card.type==="battle" ? 0.7 : 0.3})`,
                borderLeftColor: `rgba(${colors[backgroundColors[3]]}, ${card.type==="battle" ? 0.7 : 0.3 })`,
                }} />
            <img src={BorderDesign} className="card-front-corners" alt="border" />
            <div className="title-container">
                <h2 className={`card-title`}>{card.name}</h2>
            </div>
            <div className="card-image-container">
                <img className="card-image-backdrop" src={backdropImages[`${color}Backdrop`]} alt="backdrop" />
                <img className={`card-image`} src={CardSrc} alt={card.name} />
            </div>
            <div className="ability-icon">
                <img className="ability-icon-background" src={Circle} alt="ability-icon" />
                <img className="ability-icon-image" src={card.style === "passive" ? Passive : card.style === "bolt" ? Bolt : Passive} alt="ability-icon" />
            </div>
            <div className="ability-text">
                <p className="ability-title"><strong>{card.ability}</strong></p>
                <p className={`desc ${select? "": hand? "":"hidden"}`}>{card.desc}</p>
            </div>
            <div className="connector-container">
                {/* {[0,1,2,3].map(num => {
                    return (
                        connects[num] ? 
                            <div 
                                className="connector" 
                                style={{posRef[num]: 0, backgroundColor: `rgba(${connects[num]})`}}
                                style={`posRef[num]:`}
                            >
                                <img 
                                    className="connect-image" 
                                    src={connectImages[colorConvert(connections[num])]} 
                                    alt="connector" />
                            </div> 
                            : ""
                    );
                })} */}
                {connects[0] ? <div className={`connector ${!hand&&!select&&!payment&&activeConnections[0]!=="inactive"?`glowing ${activeConnections[0]}`:""}`} style={{top: 0, backgroundColor: `rgba(${connects[0]})`}}><img className="connect-image" src={connectImages[colorConvert(connections[0])]} alt="connector" /></div> : ""}
                {connects[1] ? <div className={`connector ${!hand&&!select&&!payment&&activeConnections[1]!=="inactive"?`glowing ${activeConnections[1]}`:""}`} style={{right: 0, backgroundColor: `rgba(${connects[1]})`}}><img className="connect-image" src={connectImages[colorConvert(connections[1])]} alt="connector" /></div> : ""}
                {connects[2] ? <div className={`connector ${!hand&&!select&&!payment&&activeConnections[2]!=="inactive"?`glowing ${activeConnections[2]}`:""}`} style={{bottom: 0, backgroundColor: `rgba(${connects[2]})`}}><img className="connect-image" src={connectImages[colorConvert(connections[2])]} alt="connector" /></div> : ""}
                {connects[3] ? <div className={`connector ${!hand&&!select&&!payment&&activeConnections[3]!=="inactive"?`glowing ${activeConnections[3]}`:""}`} style={{left: 0, backgroundColor: `rgba(${connects[3]})`}}><img className="connect-image" src={connectImages[colorConvert(connections[3])]} alt="connector" /></div> : ""}
            </div>
            <div className={`stats-container ${card.ability==="Equipment" || card.type==="battle" ? "hidden":""}`}>
                <div className="stats">
                    <div className="stat-container">
                        <div className="atk stat">
                            <img src={Attack} alt="attack"/>
                            <div className="stat-value"><strong>{`${card.atk}`}</strong></div>
                        </div>
                        <div className="def stat">
                            <img src={Defence} alt="defence"/>
                            <div className="stat-value"><strong>{`${card.hp}`}</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;