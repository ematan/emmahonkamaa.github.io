var level2 = function(game){}

  level2.prototype = {
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
       //Ensimmäisen meduusan luonti sprite sheet:llä
          var jellyfish = this.game.add.sprite(285, 210, 'jellyfish');
          var wiggle = jellyfish.animations.add('wiggle');
          jellyfish.animations.play('wiggle', 5, true);
          jellyfish.scale.setTo(1.3, 1.3);
          //"varaa" ruudun sprite:lle, jottei sen päälle voi enää laittaa putkea
          megaArray[4][3]="defined"
        //Toisen meduusan luonti sprite sheet:llä
          var jellyfish2 = this.game.add.sprite(635, 350, 'jellyfish');
          var wiggle = jellyfish2.animations.add('wiggle');
          jellyfish2.animations.play('wiggle', 5, true);
          jellyfish2.scale.setTo(1.3, 1.3);
          megaArray[9][5]="defined"
        //Kolmannen meduusan luonti sprite sheet:llä
          var jellyfish3 = this.game.add.sprite(495, 140, 'jellyfish');
          var wiggle = jellyfish3.animations.add('wiggle');
          jellyfish3.animations.play('wiggle', 5, true);
          jellyfish3.scale.setTo(1.3, 1.3);
          megaArray[7][2]="defined"
        //Pelin piirto pelialueelle
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




    }
  };
