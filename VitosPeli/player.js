/* Player */
var player = {
        x: 300,
        y: 300,
        w: 48,
        h: 48,
        speed: 5
    };

var playerImg = new Image();
playerImg.src = "betty.png";

/*animation information */

    var playerIndex = 0
    var playermax = 3
    var playerCurrent = playerIndex
    var atickCount =0
    var aframeIndex=0
    var eventMode=1
    var frameLoops = []

    var spriteStatePlayer = 0

function idlePlayer() {
  eventMode = 0
}

function movePlayer(dir) {
    switch (dir) {
    case "left":
        eventMode = 1;
        player.x -= player.speed;
        if (player.x < 24) {
            player.x = 24;
        }
        break;
    case "right":
        eventMode = 3;
        player.x += player.speed;
        if (player.x > 576) {
            player.x = 576;
        }
        break;
    case "up":
        eventMode = 2;
        player.y -= player.speed;
        if (player.y < 24) {
            player.y = 24;
        }
        break;
    case "down":
        eventMode = 0;
        player.y += player.speed;
        if (player.y > 576) {
            player.y = 576;
        }
        break;
    }
}

function changeSpeed() {}

function resetPosition() {}

function drawPlayer(context) {
  var x = player.x - (player.w / 2);
  var y = player.y - (player.h / 2);

  context.drawImage(playerImg,
                    48*eventMode,
                    48*spriteStatePlayer,
                    48,
                    48,
                    x,
                    y,
                    48,
                    48);
}



/*function drawPlayer(context1) {
  var playerSprite = sprite( {
      context: context1,
      width: 192,
      height: 192,
      image: playerImg,
      numberOfFrames: 4,
		  ticksPerFrame: 30
  });

  function sprite (options) {
    var that = {};
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0;
        numberOfFrames = options.numberOfFrames || 1;

      that.context = options.context;
      that.width = options.width;
      that.height = options.height;
      that.image = options.image;

      that.loop = options.loop;

      that.update = function () {
        atickCount += 1;
        if (atickCount > ticksPerFrame) {
        	//tickCount = 0;
          atickCount = 0;
          // If the current frame index is in range
                if (aframeIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    aframeIndex += 1;
                } else {
                    aframeIndex = 0;
                }
        }
    };

      that.render = function () {

          // Draw the animation
          that.context.drawImage(
             that.image,
             that.width*eventMode/4 ,
             that.height*aframeIndex/4,
             that.width/4,
             that.height/4,
             player.x,
             player.y,
             that.width/4,
             that.height/4);
      };

      return that;
  }




  var x = player.x - (player.w / 2);
  var y = player.y - (player.h / 2);
  //context.fillStyle = '#FF0000';
  playerSprite.update();
  playerSprite.render();
  //context.drawImage(playerImg,48*3,48*1,48,48, x, y,48,48);

  //context.fillRect(x,y, player.w, player.h);
}
*/
