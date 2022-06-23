/* Game script ! :D */
"use strict" // allow us to do less errors

/* variables */
var timeSet;

/* functions */
function onload() {
	/* the canvas will be displayed after 1s */
	timeSet = setTimeout(showPage, 1000);
}

/* show element when loaded */
function showPage() {
	document.getElementById("circleLoader").style.display = "none";
	document.getElementById("canvas").style.display = "block"
}