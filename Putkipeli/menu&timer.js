var timer;
var total = 0;
var playMusic = true;
var maxTime = 60000;

function createTimer(game) {
    //Create our Timer
    timer = game.time.create(false);
    //Set the timer to loop
    timer.loop(maxTime, updateCounter, this);
    //Start the timer running
    timer.start();
};

function updateCounter() {
    total++;
};

//Create the mute button that controls the background music
function createMute(game){
    //Create a label to use as the mute-button
    mute_label = game.add.text(90, 510, 'Mute', { font: 'bold 30px Annie Use Your Telescope', fill: 'white' });
    mute_label.inputEnabled = true;
    //Code that controls the playing and pausing the music
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

function createPause(game) {
    //Code for the pause menu
    //Create a label to use as the pause-button
    pause_label = game.add.text(10, 510, 'Pause', { font: 'bold 30px Annie Use Your Telescope', fill: 'white' });
    pause_label.inputEnabled = true;
    pause_label.events.onInputUp.add(function () {
        // When the paus button is pressed, we pause the game
        game.paused = true;
        /* Then add the menu
        menu = game.add.sprite(gridW/2, gridH/2, 'menu');
        menu.scale.setTo(0.5,0.5);
        menu.anchor.setTo(0.3, 0.5);
        And a label to illustrate which menu item was chosen. (This is not necessary)
        choiseLabel = game.add.text(gridW/2+110, gridH-100, 'Klikkaa valikon ulkopuolella aloittaaksesi/jatkaaksesi', { font: 'bold 30px Annie Use Your Telescope', fill: '#ff2626' });
        choiseLabel.anchor.setTo(0.5, 0.5);*/
    });

    //Add a input listener that can help us return from being paused
    game.input.onDown.add(unpause, self);

    //Method that handels the pause menu
    function unpause(event){
        // Only act if paused
        if(game.paused){
            game.paused = false;
            /* Calculate the corners of the menu
            var x1 = gridW/2 - 270/2, x2 = gridW/2 + 270/2+165,
                y1 = gridH/2 - 180/2, y2 = gridH/2 + 180/2;

            // Check if the click was inside the menu
            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                // The choicemap is an array that will help us see which item was clicked
                var choisemap = ['taso1', 'taso2', 'taso3', 'äänet', 'ohjeet', 'tekijät'];
                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;
                // Calculate the choice
                var choise = Math.floor(x / 140) + 3*Math.floor(y / 70);
                // Display the choice
                if(choisemap[choise]=='taso1'){
                    console.log("tas01")
                }
                else if(choisemap[choise]=='taso2'){
                    console.log("tas02")
                }
                else if(choisemap[choise]=='taso3'){
                    console.log("tas03")
                }
                else if(choisemap[choise]=='äänet'){
                    console.log("äänet")
                    if(playMusic==true){
                        game.input.onDown.add(pauseMusic, this);
                        playMusic=false
                    }
                    else if(playMusic==false){
                        game.input.onDown.add(resumeMusic, this);
                        playMusic=true
                    }
                }
                else if(choisemap[choise]=='ohjeet'){
                    console.log("ohjeet")
                }
                else if(choisemap[choise]=='tekijät'){
                    console.log("tekijät")
                }*/
            }
            /*else{
                //Remove the menu and the label
                menu.destroy();
                choiseLabel.destroy();

                //Unpause the game
                game.paused = false;
            }*/
        }
    };
