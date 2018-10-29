import {Player} from "./player";

export class Game {
    id: string;
    name:string;
    isStarted: boolean;
    idWinner: string;
    currentPlayerPosition: number;

    players: Player[];

    constructor(name){
        this.name = name;
    }
}