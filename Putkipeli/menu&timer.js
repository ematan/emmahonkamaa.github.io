var timer;
var total = 0;
var playMusic = true;
var maxTime = 60000;

function createTimer(game) {
    //Luo ajastimen
    timer = game.time.create(false);
    //Luo loopin ajastimelle
    timer.loop(maxTime, updateCounter, this);
    //Aloittaa ajan mittaamisen
    timer.start();
};

function updateCounter() {
    total++;
};

//Luo mute-nappulan, joka ohjaa taustamusiikin soittamista
function createMute(game){
    //Luo kuvakkeen, jolla käytetään mute-nappulaa
    mute_label = game.add.text(90, 510, 'Mute', { font: 'bold 30px Annie Use Your Telescope', fill: 'white' });
    mute_label.inputEnabled = true;
    //Koodi, joka ohjaa musiikin soittamista ja lopettamista
    mute_label.events.onInputUp.add(function () {
        if(playMusic){
            music.pause()
            playMusic=false
        }else{
            playMusic= true;
            music.resume()
        }
    });
}

//Funktio pause-nappulalle ja sen toiminnallisuudelle
function createPause(game) {
    //Luo kuvakkeen, jolla käytetään pause-nappulaa
    pause_label = game.add.text(10, 510, 'Pause', { font: 'bold 30px Annie Use Your Telescope', fill: 'white' });
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        //Kun pause-nappulaa painetaan, peli pysähtyy
        game.paused = true;
    });

    //Jos hiirtä painetaan uudestaan pause-tilassa, kutsutaan funktioita "unPause", joka aloittaa taas pelin pyörittämisen.
    game.input.onDown.add(unpause, self);

    //Funktio, joka kumoaa pelin "pausettamisen"
    function unpause(event){
        //Toimii vain, jos peli on jo "pausella"
        if(game.paused){
            game.paused = false;
        }
    }
};
