var level1 = function(game){}

var graphics1;

  level1.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '';
        updateW = false;
    },
    create: function() {
      //Grid ja aikapalkin piirto
          drawGrid(1.5*squareSize, 0, gridW, gridH, this.game);
          drawGrid(0, 0, squareSize, gridH, this.game);
          var graphics = this.game.add.graphics(squareSize*3, 500);
          graphics1 = this.game.add.graphics(squareSize*3, 500);
          graphics.lineStyle(3, 0xFFFF0B, 1);
          graphics.drawRect(0,0, 9*squareSize, 50);
      //Muu alustus
          var pipesInGame = this.game.add.group();
          var pipesWaiting = this.game.add.group();
          startingPipe = this.game.add.sprite(140, 350, 'start');
          endingPipe = this.game.add.sprite(840, 70, 'straight2');
          createMega();
          fillWaitingRoom();
          drawWaitingRoom(this.game);
          createTimer(this.game);
          createPause(this.game);
          createMute(this.game);
          //createMusic(this.game);
    },
    update: function(){
        var a = this.game;
        this.game.input.onDown.add(function () {updateY(a);}, this)
        //fillWaitingRoom();
        if(updateW){
          drawWaitingRoom(this.game);
          updateW =false
        }
        if(win){
          this.game.state.start("winGame")
        }
        if(lose){
          this.game.state.start("loseGame")
        }
        if(timer.duration.toFixed(0)<=100){
          lose=true
        }
    },
    render: function(){


      var graphics1 = this.game.add.graphics(squareSize*3, 500);
      graphics1.clear();
      // set a fill and line style
      graphics1.beginFill(0xFF3300);
      graphics1.lineStyle(0, 0xffffff, 1);

  // draw a shape
      graphics1.moveTo(0,0);
      graphics1.lineTo(0, 50);
      graphics1.lineTo((9*squareSize)*((maxTime-timer.duration.toFixed(0))/maxTime), 50);
      graphics1.lineTo((9*squareSize)*((maxTime-timer.duration.toFixed(0))/maxTime), 0);
      graphics1.lineTo(0,0);
      graphics1.endFill();


        this.game.debug.text('DEADLINE LÄHESTYY : ' + timer.duration.toFixed(0), 100, 525, { font: 'bold 25pt Annie Use Your Telescope' , fill: '#ff2626'});
    }
  };
  var updateW = false
  var testTicker=1000
