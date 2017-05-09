var music;

function resumeMusic(){
    music.resume();
}

function pauseMusic(){
    music.pause();
}

function createMusic(game){
    music = game.add.audio('mystery');
    music.loopFull();
}
