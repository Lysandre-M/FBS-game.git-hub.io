"use strict"

// for the character's movements
window.addEventListener('keydown', move); 

/* manage the character's movements*/
function move (event){
	const e = event.keyCode;
	switch (e) {
		// left, q
		case 37 : case 81 :
			console.log(`left`);
			break;

		// up, z
		case 38 : case 90 :
			console.log(`up`);
			break;

		// right, d
		case 39 : case 68 : 	
			console.log(`right`);
			break;

		// down, s
		case 40 : case 83 : 	
			console.log(`down`);
			break;
		
		// ignore, do nothing
		default:
			console.log(`ignore this key (ASCII code : ${e})`);
			break;
	}
}