/* Enemy */
var enemyImg = new Image();
enemyImg.src = "fire.png";

var maxEnemyCount = 7
var enemyArray = [];

function collisionTest(x, y){
  var spaceFound = true
  var returnValue = false
  if(enemyArray.length>0){
    for(var j =  0; j< enemyArray.length; j++){
      if (   x <= (enemyArray[j].x + 50)
          && enemyArray[j].x <= (x + 50)
          && y <= (enemyArray[j].y + 50)
          && enemyArray[j].y <= (y + 50)){
            spaceFound = false
      }
    }
  }
    /*Pelaajalle hieman leveämmät "turvarajat"*/
  if(spaceFound
      &&  x <= player.x + 80
      && player.x <= (x + 80)
      && y <= (player.y + 80)
      && player.y <= (y + 80)){
         spaceFound =false
  }


  return  spaceFound
}




function createEnemy() {
  if(enemyArray.length < maxEnemyCount){
    var xValue = getRandomInteger(32, 567);
    var yValue = getRandomInteger(32, 567);
    while(!collisionTest(0, 0)){
      xValue = getRandomInteger(32, 567);
      yValue = getRandomInteger(32, 567);
    }

    var newE ={
      x: xValue,
      y: yValue,
      w: 64,
      h: 64,
      speedX: getRandomInteger(1,2),
      speedY: getRandomInteger(1,2)
    }
    enemyArray.push(newE);
  }
}
var executionList= []
function deleteEnemy(enemyName) {
  for(var j=0; enemyArray.length; j+=1){
    if(enemyArray[j] === enemyName){
      enemyArray[j]=null;
      enemyArray.splice(j, 1);
      break
    }
  }
}

function moveEnemy() {}

var spriteStateEnemy = 0





function drawEnemy(context) {
  for(var i =  0; i< enemyArray.length; i++){
    enemyArray[i].x += enemyArray[i].speedX;
    enemyArray[i].y += enemyArray[i].speedY;
    if (enemyArray[i].x-32<=1 || enemyArray[i].x+32>=600) enemyArray[i].speedX = -enemyArray[i].speedX
    if (enemyArray[i].y-32<=1 || enemyArray[i].y+32>=600) enemyArray[i].speedY = -enemyArray[i].speedY

    if (
		player.x <= (enemyArray[i].x + 24)
		&& enemyArray[i].x <= (player.x + 24)
		&& player.y <= (enemyArray[i].y + 32)
		&& enemyArray[i].y <= (player.y + 32)) reset();

    for(var j =  0; j< enemyArray.length; j++){
      if(j!=i){
        if (
    		enemyArray[i].x <= (enemyArray[j].x + 30)
    		&& enemyArray[j].x <= (enemyArray[i].x + 30)
    		&& enemyArray[j].y <= (enemyArray[i].y + 32)
    		&& enemyArray[i].y <= (enemyArray[j].y + 32)){

        enemyArray[i].speedX = -enemyArray[i].speedX;
        enemyArray[i].speedY = -enemyArray[i].speedY;
        //törmäily jumittaa herkästi, jos molempien suunta vaihtuu...
        //enemyArray[j].speedX = -enemyArray[j].speedX;
        //enemyArray[j].speedY = -enemyArray[j].speedY
      }
      }
    }


    var x = enemyArray[i].x - (enemyArray[i].w/2)
    var y = enemyArray[i].y - (enemyArray[i].h/2)

    context.drawImage(
            enemyImg,
            spriteStateEnemy*64,
            0,
            64,
            64,
            x,
            y,
            64,
            64)
  }
}
