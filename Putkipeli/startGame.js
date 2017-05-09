//startGame = menuvalikko :D

var startGame = function(game){}

var music;

startGame.prototype = {
  	create: function(){
      //Päävalikon nappuloiden ja niiden toiminnallisuuksien luonti
		var play1 = this.game.add.button(this.game.world.centerX,this.game.world.centerY-200,"lvl1",this.playLevel1,this);
        play1.scale.setTo(0.6, 0.6);
		play1.anchor.setTo(0.5,0.5);

        var play2 = this.game.add.button(this.game.world.centerX,this.game.world.centerY-100,"lvl2",this.playLevel2,this);
        play2.scale.setTo(0.6, 0.6);
		play2.anchor.setTo(0.5,0.5);

        var play3 = this.game.add.button(this.game.world.centerX,this.game.world.centerY,"lvl3",this.playLevel3,this);
        play3.scale.setTo(0.6, 0.6);
		play3.anchor.setTo(0.5,0.5);

        var äänet = this.game.add.button(this.game.world.centerX,this.game.world.centerY+100,"sound",this.soundCheck,this);
        äänet.scale.setTo(0.6, 0.6);
		äänet.anchor.setTo(0.5,0.5);
	},
    //Täällä määritellään, että mitä tapahtuu, kun jotain tiettyä nappulaa on painettu
    //Esim. kun painetaan nappulaa, jossa lukee "taso 1", peli alkaa pyörittää tasoa yksi
	playLevel1: function(){
		this.game.state.start("level1");
	},
    playLevel2: function(){
		this.game.state.start("level2");
	},
    playLevel3: function(){
		this.game.state.start("level3");
	},
    //Ääninappulaa painettassa musiikki pyörii tai loppuu
    soundCheck: function(){
		if(playMusic==true){
            music.pause()
            playMusic=false
        }
        else if(playMusic==false){
            music.resume()
            playMusic=true
        }
	}
};
