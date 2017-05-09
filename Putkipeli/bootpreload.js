var boot = function(game){
	//Debuggausta varten: console.log("%cKäynnistä peli", "color:white; background:red");
};

boot.prototype = {
	preload: function(){

	},
  	create: function(){
		//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//this.scale.pageAlignHorizontally = true;
		//this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}


//preload alkaa tästä
var preload = function(game){
  //Debuggausta varten: console.log("%cLataa peli", "color:white; background:red");
}

preload.prototype = {
	preload: function(){
				//Tuodaan peliin äänet & kuvat
          this.game.stage.backgroundColor = '';
          this.game.load.image('start', 'putket/start.png');
          this.game.load.image('straight1', 'putket/straight1.png');
          this.game.load.image('straight2', 'putket/straight2.png');
          this.game.load.image('corner1', 'putket/corner1.png');
          this.game.load.image('corner2', 'putket/corner2.png');
          this.game.load.image('corner3', 'putket/corner3.png');
          this.game.load.image('corner4', 'putket/corner4.png');
          this.game.load.audio('mystery', 'sea.mp3');
          this.game.load.image('lvl1', 'menu/lvl1.png');
          this.game.load.image('lvl2', 'menu/lvl2.png');
          this.game.load.image('lvl3', 'menu/lvl3.png');
          this.game.load.image('sound', 'menu/sound.png');
          this.game.load.image('valikkoon', 'menu/valikkoon.png');
          this.game.load.spritesheet('shark', 'meri/shark.png', 142, 121, 7);
          this.game.load.spritesheet('jellyfish', 'meri/jellyfish1.png', 288/6, 47, 6);
	},
  	create: function(){
			//Käynnistetään musiikki
        music = this.game.add.audio('mystery');
        music.loopFull();
			//Siirrytään valikkoon
				this.game.state.start("startGame");
	}
}
