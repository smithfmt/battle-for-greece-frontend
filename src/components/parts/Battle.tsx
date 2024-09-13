import React, { useEffect, useState } from "react";
import { generateBoard } from "../../frontend-helpers";
import { BoardType, CardType, SquareType } from "../../frontend-types";
import Card from "./Card";
import LineToMouse from "../sketches/LineToMouse";

type Props = {
    playerBoard: BoardType,
    enemyBoard: BoardType,
    setSelect: Function,
    cardMode: string,
    attackCard: Function,
    select: CardType|null,
    ended: boolean,
};

const Battle = ({ playerBoard, enemyBoard, setSelect, cardMode, attackCard, select, ended }:Props) => {
    useEffect(() => {
        return(() => setSelect(null));
    }, [setSelect]);
    const [selectCardId, setSelectCardID] = useState("");
    if (ended) {
        console.log("ENDED")
        return (<div></div>);
    };
    const [playerAxes, enermyAxes] = [playerBoard.cards, enemyBoard.cards||[]].map((cards:{card:CardType,square:SquareType}[]) => {
        const squares: SquareType[] = cards.map(card => {
            return card.square;
        }).filter((square: SquareType | undefined): square is SquareType => {
            return (square as SquareType) !== undefined;
        });
        return {axes: generateBoard(squares, true), squares, cards};
    });
    const selectCard = (card:CardType, square:SquareType, index:number, id:string) => {
        if (index===1&&cardMode!=="view") return attackCard(card, square);
        setSelectCardID(id);
        if (select&&card.id===select.id) return setSelect(null);
        return setSelect(card);
    };
    let keyVal = 0;
    return (
        <>
        {cardMode!=="view"&&select?
        <LineToMouse cardId={selectCardId} />
        :<></>}
        <div className="battle-container">


        <div className="battles-container">
            {[playerAxes, enermyAxes].map(({axes: {xAxis, yAxis}, squares, cards}, index) => {
                return (
                    <>
                    {index===1?
                        <div className="battle-wall"></div>
                    :<></>}
                    <div key={`battleBoard${index}`} className={`battle-board-container ${index===0?"right":"left"}`}>
                        {yAxis.map(y => {
                            keyVal++;
                            return (
                                <div key={`gridrow${keyVal}`} id={`${y}gridrow`} className="grid-row">
                                    {xAxis.map(x => {
                                        return (
                                        <div key={`${x}:${y}slot`} id={`board${index}-${x}:${y}`} className={`card-slot`}>
                                            {squares.filter(square => square[0]===x && square[1]===y).length?
                                                <Card 
                                                    key={`${x}:${y}`} 
                                                    card={cards.filter(card => {
                                                        return (card.square? card.square[0]===x && card.square[1]===y:"");
                                                    })[0].card} 
                                                    onClick={() => selectCard(cards.filter(card => {
                                                        return (card.square? card.square[0]===x && card.square[1]===y:"");
                                                    })[0].card, [x,y], index, `board${index}-${x}:${y}`)}
                                                />
                                                :
                                                <></>
                                            }
                                        </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    </>
                );
            })}
        </div>
        </div>
        </>
    );
};
 
export default Battle;