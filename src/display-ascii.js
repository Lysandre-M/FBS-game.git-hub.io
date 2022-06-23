/**
 * For test's purpose
 */

"use strict"

import {ITEM, CHARACTER, OBSTACLE} from "./main.js";
import { Board } from "./game-board.js";

export class Ascii { // ASCII

    dead(){
        console.log("Game over");
    }

    road(){
        return '. ';
    }
    
    item(){
        return 'ù ';
    }

    character(direction){
        switch(direction){
            case "left":
                return '< ';

            case "right":
                return '> ';

            case "down":
                return 'v ';

            case "up":
                return '^ ';

            default : break;
        }
    }

    obstacle(){
        return 'o ';
    }

    display(board, direction){
        let maxLine = board.length;
        let maxColumn = board[0].length;
        let line = '';

        for (let i = 0; i < maxLine; i++){
            for (let j = 0; j < maxColumn; j++){
                switch(board[i][j]){
                    case ITEM :
                        line += this.item();
                        break;

                    case CHARACTER : 
                        line += this.character(direction);
                        break;

                    case OBSTACLE :
                        line += this.obstacle();
                        break;

                    default : // ROAD
                        line += this.road();
                        break;
                }
            }
            line += '\n';
        }
        console.log(line);
    }
}
