/* (On canvas)
 * Menu to be displayed when opening the game. */

"use strict"

/* global variables */
var startButton = new Image();
startButton.src = "../files/buttons/start.png";

var canvas, context, gameArea;
var X, Y;

function setMenu() {
	canvas   = document.getElementById("game_area");
	gameArea = canvas.getBoundingClientRect();
	context  = canvas.getContext("2d");
	X        = canvas.width;
 	Y        = canvas.height;

   	context.clearRect(0, 0, X, Y);

	context.drawImage(titre, X / 2 - startButton.width / 2, Y / 2 - startButton.height / 2);
}
