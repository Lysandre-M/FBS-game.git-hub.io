/* game script */

"use strict"

/* Importations */
import {Board} from "./game-board.js";
import { Character } from "./character.js";
import { Ascii } from "./display-ascii.js";

/**
 * All objects we can find in the board
 */
let enumerate = 0;
export const ROAD = enumerate++;
export const ITEM = enumerate++;
export const CHARACTER = enumerate++;
export const OBSTACLE = enumerate++;

let board = new Board(16, 20, ROAD);
let character = new Character(8, 10);
let display = new Ascii();

// for the character's movements
window.addEventListener('keydown', action);

export function init(){
	// TODO : change the content of the function
	board.update(character.position(), CHARACTER);
	display.display(board.getBoard(), character.direction());
}

export function action(event){
	let new_coord = character.move(event);

	if(board.inBoard(new_coord)){
		board.update(character.position(), ROAD);
		character.update(new_coord);
		board.update(character.position(), CHARACTER);
	}
	
	display.display(board.getBoard(), character.direction());
}

/*
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

// insert obstacle
    let maxObstacles = getRandomInt(this.line * this.column);
    for(let i = 0; i < maxObstacles; i++){
        this.board[getRandomInt(this.line)][getRandomInt(this.column)] = 1;
    }

*/