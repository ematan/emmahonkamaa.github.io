var level1 = function(game){}

var graphics1;

  level1.prototype = {
    //ladataan asioita joita tarvitaan myöhemmin
    preload: function() {
        this.game.stage.backgroundColor = '';
        updateW = false;
    },
    create: function() {
      //Gridin/verkon piirto
          drawGrid(1.5*squareSize, 0, gridW, gridH, this.game);
          drawGrid(0, 0, squareSize, gridH, this.game);
      //Aikapalkin piirto
          var graphics = this.game.add.graphics(squareSize*3, 500);
          graphics1 = this.game.add.graphics(squareSize*3, 500);
          graphics.lineStyle(3, 0xFFFF0B, 1);
          graphics.drawRect(0,0, 9*squareSize, 50);
      //Muu alustus
          var pipesInGame = this.game.add.group();
          var pipesWaiting = this.game.add.group();
          startingPipe = this.game.add.sprite(140, 350, 'start');
          endingPipe = this.game.add.sprite(840, 70, 'straight2');
      //Peliruudukon "koordinaattien" luominen
          createMega();
      //Täyttää ruudukon, josta raahataan putkenpaloja peliruudukkoon
          fillWaitingRoom();
      //Piirtää edellämainitun ruudukon
          drawWaitingRoom(this.game);
      //Luo ajastimen
          createTimer(this.game);
      //Luo pausenappulan
          createPause(this.game);
      //Luo ääninappulan
          createMute(this.game);
    },
    update: function(){
        var a = this.game;
        this.game.input.onDown.add(function () {updateY(a);}, this)
        if(updateW){
          drawWaitingRoom(this.game);
          updateW =false
        }
        //Jos peli voitettu mennään "winGame"-state:iin
        if(win){
          this.game.state.start("winGame")
        }
        //Jos peli hävitty mennään "loseGame"-state:iin
        if(lose){
          this.game.state.start("loseGame")
        }
        //Jos aika loppui peli hävitään
        if(timer.duration.toFixed(0)<=100){
          lose=true
        }
    },
    render: function(){
      var graphics1 = this.game.add.graphics(squareSize*3, 500);
      graphics1.clear();
      //Asettaa fill ja line tyylit
      graphics1.beginFill(0xFF3300);
      graphics1.lineStyle(0, 0xffffff, 1);
      //Piirtää muodon 
      graphics1.moveTo(0,0);
      graphics1.lineTo(0, 50);
      graphics1.lineTo((9*squareSize)*((maxTime-timer.duration.toFixed(0))/maxTime), 50);
      graphics1.lineTo((9*squareSize)*((maxTime-timer.duration.toFixed(0))/maxTime), 0);
      graphics1.lineTo(0,0);
      graphics1.endFill();
    }
  };
  var updateW = false
  var testTicker=1000
