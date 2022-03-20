/* Game script ! :D */
"use strict" // allow us to do less errors

var timeSet;
window.addEventListener('keydown', move); // for the character's movements

function onload() {
	/* the canvas will be displayed after 1s */
	timeSet = setTimeout(showPage, 1000);
}

/* show element when loaded */
function showPage() {
	document.getElementById("circleLoader").style.display = "none";
	document.getElementById("canvas").style.display = "block"
}

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