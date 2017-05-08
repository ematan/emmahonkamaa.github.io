var winGame = function(game){}

winGame.prototype = {
  	create: function(){
        console.log("voitto")
		var gameTitle = this.game.add.sprite(160,160,"straight1");
		gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(160,320,"straight1",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		this.game.state.start("level1");
	}
}
