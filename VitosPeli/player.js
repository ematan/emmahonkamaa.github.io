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
