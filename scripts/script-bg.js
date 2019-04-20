/********************************************************************************
                                  BACKGROUND
********************************************************************************/

var canvas = document.getElementsByClassName("header__background-gradient")[0];
//var canvas = document.getElementsById("canvas");
var context = canvas.getContext("2d");
			
context.beginPath();
context.moveTo(700, 625);
context.lineTo(40, 625);
context.quadraticCurveTo(10, 620, 0, 550);
context.bezierCurveTo(30, 70, 500, -140, 700, 100);
context.closePath();
var gradient = context.createLinearGradient(200, 625, 500, 0);
gradient.addColorStop(0, "#FF8F5A");
gradient.addColorStop(1, "#FF2F96");
context.fillStyle = gradient;
context.fill();