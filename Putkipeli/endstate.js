
var win = false
var lose = false

var winGame = function(game){}
winGame.prototype = {
    create: function(){
        restartStuff();
        var style = { font: "bold 32px Annie Use Your Telescope", fill: "#fff" };
        var text = this.game.add.text(this.game.world.centerX-200, this.game.world.centerY-200, "Onneksi olkoon! Pysyit aikataulussa! \nKaikki voittivat! Maakaasu valoittaa maailman!!!", style);
        var playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"valikkoon",this.playTheGame,this);
        playButton.scale.setTo(0.7, 0.7);
        playButton.anchor.setTo(0.5,0.5);
  },
    playTheGame: function(){
        this.game.state.start("startGame");
    }
}

var loseGame = function(game){}
loseGame.prototype = {
    create: function(){
        restartStuff();
        var style = { font: "bold 32px Annie Use Your Telescope", fill: "#fff"};
        var text = this.game.add.text(this.game.world.centerX-200, this.game.world.centerY-200, "Valitettavasti et pysynyt aikataulussa \n ja putket ruostuivat merenpohjaan...", style);
        var playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"valikkoon",this.playTheGame,this);
        playButton.scale.setTo(0.7, 0.7);
        playButton.anchor.setTo(0.5,0.5);
    },
    playTheGame: function(){
        this.game.state.start("startGame");
    }
}

function restartStuff(){
    win=false;
    lose=false;
    megaArray = new Array(9);
    waitingRoom = ["","","","","","",""],
    nextCoord = startCoord
}
