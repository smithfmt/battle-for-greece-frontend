import React from "react";
import Card from "./Card";
import { generateBoard } from "../../frontend-helpers";
import { findAdjacentCard, mapConnection } from "../../board-nav";
import { BoardType, CardType, SquareType } from "../../frontend-types";

type Props = {
    board: BoardType,
    select?: CardType|null,
    pickupCard?: Function,
    placeCard?: Function,
    view?: boolean,
};

const GameBoard = ({ board, select, placeCard, pickupCard, view }: Props) => {
    const { cards, canPlace } = board;
    let placeable = select? canPlace.filter(square => {
        let successes = 0;
        const failed = select.connections.filter((connection, index) => {
            const inactive = connection === "inactive"?1:-1;
            const adjacentCard = findAdjacentCard(cards, square, index);
            if (adjacentCard) {
                const match = adjacentCard.card.connections[mapConnection(index)]==="inactive"?-1:1;
                if (inactive===-1&&match===1) {successes++}
                return inactive+match;  
            };
            return false;
        });
        if (!failed.length&&successes) {
            return true;
        };
        return false;
    }) : [];
    if (cards.length===10) placeable = [];
    const squares: SquareType[] = cards.map(card => {
        return card.square;
    }).filter((square: SquareType | undefined): square is SquareType => {
        return (square as SquareType) !== undefined;
    });
    const { xAxis, yAxis } = generateBoard(squares);

    const tryPlaceCard = (card:CardType, square:SquareType) => {
        if (view||!placeCard) return;
        if (placeable.filter(squ => {return (squ[0]===square[0]&&squ[1]===square[1])}).length) {
            placeCard(card, square);
        };
    };

    const selectCard = (card:CardType, square:SquareType) => {
        if (view||!pickupCard) return;
        pickupCard(card, square);
    };
    let keyVal = 0;
    return (
        <div className="game-board-container" >
            {yAxis.map(y => {
                keyVal++;
                return (
                    <div key={`gridrow${keyVal}`} id={`${y}gridrow`} className="grid-row">
                        {xAxis.map(x => {
                            if (select&&placeable) {
                                return (
                                    <div 
                                        key={`${x}:${y}slot`} id={`${x}:${y}`} 
                                        className={`card-slot ${placeable.filter(squ => {return (squ[0]===x&&squ[1]===y)}).length?"select":""}`}
                                        onClick={() => tryPlaceCard(select, [x,y])}
                                    >
                                    {squares.filter(square => square[0]===x && square[1]===y).length?
                                        <Card 
                                            key={`${x}:${y}`} 
                                            card={cards.filter(card => {
                                                return (card.square? card.square[0]===x && card.square[1]===y:"");
                                            })[0].card} 
                                            onClick={() => selectCard(cards.filter(card => {
                                                return (card.square? card.square[0]===x && card.square[1]===y:"");
                                            })[0].card, [x,y])}
                                        />
                                        :
                                        <></>
                                    }
                                    </div>
                                );
                            };
                            return (
                            <div key={`${x}:${y}slot`} id={`${x}:${y}`} className={`card-slot`}>
                                {squares.filter(square => square[0]===x && square[1]===y).length?
                                    <Card 
                                        key={`${x}:${y}`} 
                                        card={cards.filter(card => {
                                            return (card.square? card.square[0]===x && card.square[1]===y:"");
                                        })[0].card} 
                                        onClick={() => selectCard(cards.filter(card => {
                                            return (card.square? card.square[0]===x && card.square[1]===y:"");
                                        })[0].card, [x,y])}
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
    );
};

export default GameBoard;