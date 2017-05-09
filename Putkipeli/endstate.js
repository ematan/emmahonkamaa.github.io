
var win = false
var lose = false

var winGame = function(game){}

//Koodi, joka ajetaan, jos pelaaja voittaa pelin
winGame.prototype = {
    create: function(){
        restartStuff();
        //Luodaan voitto-teksti
        var style = { font: "bold 32px Annie Use Your Telescope", fill: "#fff" };
        var text = this.game.add.text(this.game.world.centerX-200, this.game.world.centerY-200, "Onneksi olkoon! Pysyit aikataulussa! \nKaikki voittivat! Maakaasu valoittaa maailman!!!", style);
        //Luodaan nappula, josta päästään takaisin päävalikkoon
        var playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"valikkoon",this.playTheGame,this);
        playButton.scale.setTo(0.7, 0.7);
        playButton.anchor.setTo(0.5,0.5);
  },
    //Metodi, joka ohjaa pelin takaisin "startGame"-state:iin (eli päävalikkoon)
    playTheGame: function(){
        this.game.state.start("startGame");
    }
}

var loseGame = function(game){}

//Koodi, joka ajetaan, jos pelaaja häviää pelin
loseGame.prototype = {
    create: function(){
        restartStuff();
        //Luodaan häviö-teksti
        var style = { font: "bold 32px Annie Use Your Telescope", fill: "#fff"};
        var text = this.game.add.text(this.game.world.centerX-200, this.game.world.centerY-200, "Valitettavasti et onnistunut työssäsi \n ja putket ruostuivat merenpohjaan...", style);
        //Luodaan nappula, josta päästään takaisin päävalikkoon
        var playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"valikkoon",this.playTheGame,this);
        playButton.scale.setTo(0.7, 0.7);
        playButton.anchor.setTo(0.5,0.5);
    },
    //Metodi, joka ohjaa pelin takaisin "startGame"-state:iin (eli päävalikkoon)
    playTheGame: function(){
        this.game.state.start("startGame");
    }
}

//Uudelleen ohjelmoi kaiken aloitusasentoon uutta peliä varten
function restartStuff(){
    win=false;
    lose=false;
    megaArray = new Array(9);
    waitingRoom = ["","","","","","",""],
    nextCoord = startCoord
}
