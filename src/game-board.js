"use strict"

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

class Board{
    constructor(height, width){
        this.line = height;
        this.column = width;
        
        this.board = [];
        // create board
        for( let i = 0; i < this.line; i++){
            this.board.push([]);
            for (let j = 0; j < this.column; j++ ){
                this.board[i].push(0);
            }
        }
        // insert obstacle
        let maxObstacles = getRandomInt(this.line * this.column);
        for(let i = 0; i < maxObstacles; i++){
            this.board[getRandomInt(this.line)][getRandomInt(this.column)] = 1;
        }
    }

    display(){
        // console.log(this.board);
        
        for (let i = 0; i < this.line; i++){
            let line = '';
            for (let j = 0; j < this.column; j++){
                switch(this.board[i][j]){
                    case 1 : // obstacle
                        line += 'X ';
                        break;
                    default : // case 0 = road
                        line += '. ';
                }
            }
            console.log(line);
        }
    }
    
}

// test :
let board = new Board(15, 20);
board.display();