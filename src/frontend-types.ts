export type SquareType = Array<number>;

export type CardType = {
    ability: string,
    atk: number,
    background: Array<string>,
    blue: number,
    color: string,
    connect: number,
    connections: Array<string>,
    cost: number,
    desc: string,
    green: number,
    hp: number,
    img: string,
    name: string,
    red: number,
    style: string,
    type: string,
    square?: SquareType,
    shop?:string,
    costArr?:string[],
    activeConnections:string[],
    id:number,
    team:string,
};

export type PlayerType = {
    board: {
        canPlace: Array<SquareType>,
        cards: {
            card:CardType,
            square:SquareType,
        }[],
    },
    drawnBasic: boolean,
    uid: string,
    username: string,
    generalChoice?: Array<CardType>,
    hand?:Array<CardType>
    goodPlacement?: boolean,
    attacked?: boolean,
    cast?:boolean,
};

export type UserType = {
    first: string,
    games: any,
    last: string,
    open: {
        game: string|false,
        lobby: string|false,
    },
    uid: string,
    username: string,
    wins: number,
};

export type LobbyType = {
    lobbyName: string,
    playerCount: number,
};

export type ColorType = string|number;

export type BoardType = {
    canPlace: SquareType[],
    cards: {
        card:CardType,
        square:SquareType,
    }[],
};

export type BattleType = {
    players: PlayerType[],
    whoTurn: string,
    ended: boolean,
};