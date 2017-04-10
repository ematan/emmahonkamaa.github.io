var canvas;
var ctx;
var keysDown;
var then;
var counter = 0;
var mouseDown;

/*napit ym. mitat*/
var bWidth = 150;
var bHeight = 50;
var incButton = {
	x:610,
	y:110,
	width:bWidth-20,
	heigth:bHeight
};
var decButton = {
  x:610,
  y:170,
  width:bWidth-20,
	heigth:bHeight
}


var playerImg = new Image();
playerImg.src = "betty.png";

var enemyImg = new Image();
enemyImg.src = "fire.png";

var backImg = new Image();
backImg.src = "Tileable1h.png"

function setup(context) {
  while(enemyArray.length < maxEnemyCount){
    createEnemy();
  }
}

function updateSprite(){
  if(spriteStateEnemy<4){
    spriteStateEnemy += 1
  } else spriteStateEnemy = 0
  if(spriteStatePlayer<3){
    spriteStatePlayer += 1
  } else spriteStatePlayer = 0
}

function drawButtons(ctx) {
  ctx.beginPath();
  ctx.rect(610, 110, bWidth-20, 50);
  ctx.rect(610, 170, bWidth-20, 50);
  ctx.fillStyle = '#000000';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#FFFFFF';
  ctx.stroke();
  ctx.closePath();

  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("INCREASE",625,140);
  ctx.fillText("DECREASE",620,200);
}



var reset = function () {
	player.x = 600 / 2;
	player.y = 600 / 2;
}

var update = function (counter) {
                if (38 in keysDown) {
                    movePlayer("up");
                }
                if (40 in keysDown) {
                    movePlayer("down");
                }
                if (37 in keysDown) {
                    movePlayer("left");
                }
                if (39 in keysDown) {
                    movePlayer("right");
                }
                if(counter%20==0) updateSprite();

};

function gameLoop() {
  update(counter);

  render();
  counter +=1
  requestAnimationFrame(gameLoop);
}

var render = function () {

        ctx.drawImage(backImg, 0, 0)

        ctx.fillStyle = '#000000';
        ctx.fillRect(600, 0, bWidth, 600);
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("SPEED:",610,50);
        ctx.fillText(player.speed, 610, 80);


        drawButtons(ctx);

        drawPlayer(ctx);
        drawEnemy(ctx);

};

function getRandomInteger(min, max) {
        "use strict";
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}
function isInside(pos, rect){
	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}
function isEnemy(pos, array){
  var returnThis = false
  var pituus = array.length
  for(var i= 0; i<pituus; i+=1){
    if(pos.x <= (array[i].x + 24)
		&& array[i].x <= (pos.x + 24)
		&& pos.y <= (array[i].y + 32)
		&& array[i].y <= (pos.y + 32)){
      executionList.push(array[i])
      returnThis = true
    }
  }

    return returnThis
  }







$(document).ready(function () {
    "use strict";
    canvas = document.getElementById("peli");
    ctx = canvas.getContext("2d");

    keysDown = {};
      window.addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
      }, false);
      window.addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
      });

    //object.addEventListener("mousedown", myScript)
    window.addEventListener('click', function(evt) {
	     var mousePos = getMousePos(canvas, evt);
       //debugger;
	      if (isInside(mousePos,incButton)) {
		        player.speed +=1;
        }else if(isInside(mousePos,decButton)){
            player.speed -=1;
        }else if(isEnemy(mousePos, enemyArray)){
            for(var j=0; executionList.length; j+=1){
                deleteEnemy(executionList[j]);
                setTimeout(createEnemy, 1000);
                executionList = [];
            }
        }
      }, false); 

    setup(ctx);
    then = Date.now();
    gameLoop();
    });
