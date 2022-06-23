"use strict"

export class Character {
	#direction = "down";
	#position;

	constructor(line, column){
        this.#position = [line, column];
    }

	position(){
		return this.#position;
	}

	direction(){
		return this.#direction;
	}

	update(coord){
		this.#position = coord;
	}

	/* manage the character's movements*/
	move(event){
		let [line, col] = this.#position;
		const e = event.keyCode;
		switch (e) {
			// left, q
			case 37 : case 81 :
				this.#direction = "left";
				return [line, col -1];
	
			// up, z
			case 38 : case 90 :
				this.#direction = "up";
				return [line -1, col];
	
			// right, d
			case 39 : case 68 : 	
				this.#direction = "right";
				return [line, col + 1];
	
			// down, s
			case 40 : case 83 : 	
				this.#direction = "down";
				return [line + 1, col];
			
			// ignore, do nothing
			default:
				console.log(`ignore this key (ASCII code : ${e})`);
				return [line, col];
		}
	}
}

