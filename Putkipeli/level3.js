var level3 = function(game){}

  level3.prototype = {
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
       //Ensimmäisen hain piirto pelialueelle sprite sheett:ien avulla
          var shark = this.game.add.sprite(558, 80, 'shark');
          var swim = shark.animations.add('swim');
          shark.animations.play('swim', 10, true);
          //"varaa" neljä ruutua sprite:lle, jottei sen päälle voi enää laittaa putkea
          megaArray[8][1]="defined"
          megaArray[8][2]="defined"
          megaArray[9][1]="defined"
          megaArray[9][2]="defined"
       //Toisen hain piirto pelialueelle sprite sheett:ien avulla
          var shark2 = this.game.add.sprite(280, 150, 'shark');
          var swim = shark2.animations.add('swim');
          shark2.animations.play('swim', 10, true);
          megaArray[4][2]="defined"
          megaArray[4][3]="defined"
          megaArray[5][2]="defined"
          megaArray[5][3]="defined"
       //Kolmannen hain piirto pelialueelle sprite sheett:ien avulla
          var shark3 = this.game.add.sprite(420, 360, 'shark');
          var swim = shark3.animations.add('swim');
          shark3.animations.play('swim', 10, true);
          megaArray[6][5]="defined"
          megaArray[6][6]="defined"
          megaArray[7][5]="defined"
          megaArray[7][6]="defined"
       //Neljännen hain piirto pelialueelle sprite sheett:ien avulla
          var shark4 = this.game.add.sprite(630, 290, 'shark');
          var swim = shark4.animations.add('swim');
          shark4.animations.play('swim', 10, true);
          megaArray[9][4]="defined"
          megaArray[9][5]="defined"
          megaArray[10][5]="defined"
          megaArray[10][4]="defined"
       //Pelin piirto pelialueelle
          drawWaitingRoom(this.game);
          createTimer(this.game);
          createPause(this.game);
          createMute(this.game);
          //createMusic(this.game);
    },
    //Päivittää pelialuetta ajankohtaiseksi
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
      //Piirtää aikapalkin pelin alareunalle
      var graphics1 = this.game.add.graphics(squareSize*3, 500);
      graphics1.clear();
      graphics1.beginFill(0xFF3300);
      graphics1.lineStyle(0, 0xffffff, 1);
      graphics1.moveTo(0,0);
      graphics1.lineTo(0, 50);
      graphics1.lineTo((9*squareSize)*((maxTime-timer.duration.toFixed(0))/maxTime), 50);
      graphics1.lineTo((9*squareSize)*((maxTime-timer.duration.toFixed(0))/maxTime), 0);
      graphics1.lineTo(0,0);
      graphics1.endFill();
    }
  };
