//arvoja gridin piirtämiseen jne.
var gridH = 490;
var gridW = 735;
var squareSize = 70;

//Tämä saa arvon true, kun pelaaja tekee siirron
//muuttuu takaisin falseksi heti kun peliruudukko on päivitetty
//eli estää jatkuvan päivittämisen
//(ja sen että Emman kone hurisee hulluna ja nousee lentoon :DD)
var updateW = false;

var latestY = 0;

//Debuggausta varten
var result = ""

//Piirretään grid
var drawGrid = function(startX, startY, w, h, game) {
    var gfx = game.add.graphics(startX, startY);
    gfx.lineStyle(3, 0xffffff, 5);

    for (x=startX; x<=w; x+=squareSize) {
        for (y=startY; y<=h; y+=squareSize) {
            gfx.moveTo(x, startY);
            gfx.lineTo(x, h);
            gfx.endFill();
            gfx.moveTo(startX, y);
            gfx.lineTo(w, y);
            gfx.endFill();
        }
    }
};

//"Odotushuone". Tänne tallennetaan vasemman ruudukon putket
var waitingRoom = ["","","","","","",""];

//Metodi, joka täyttää sivussa olevan ruudukon, josta raahataan putket peliruudukkoon.
function fillWaitingRoom(){
    for(var y = 0; y < 7; y++){
        if(waitingRoom[y] == ""){
            var temp = createPipe();
            temp.origY = y
            waitingRoom[y] = temp;
        }
    }
};

//tässä luodaan itse peliruudukko ja täytetään se tyhjällä
// näin täytetään muualla...: x[5][12] = 3.0;
var megaArray = new Array(9);
function createMega(){
  for (var i = 0; i < 12; i++) {
    megaArray[i] = new Array(7);
  }
};


function updateY(game){
  currentY = Math.floor(game.input.mousePointer.y/squareSize)
}

//piirretään putket waitingRoomiin. (kutsutaan myöhemmin vaun/aina kun pelissä "tapahtuu jotain")
//piirtää ikävä kyllä kaikki ruudut "uudelleen", ei pelkästään sitä puuttuvaa yhtä
//pelaaja ei onneksi tätä huomaan :D
function drawWaitingRoom(game){
  for(var i=0; i<7; i++){
    var x = game.add.sprite(0,i*squareSize, waitingRoom[i].img);
    x.customPipeIndex = allPipes.indexOf(waitingRoom[i])
    enableDrag(x);
    x.input.enableSnap(squareSize, squareSize, false, true);
    var a = i;
    //x.events.onDragStart.add(function(){latestY=a});
    x.events.onDragStop.add(fixLocation, this);
    //x.events.onDragStop.add(fixLocation(x, startLoc));
    //console.log(latestY);
    waitingRoom[i]=x;
  }
};

function fixLocation(item) {
    // kun putki "tiputetaan", tarkistetaan koordinaatit
    var newLocX = (item.x/squareSize);
    var newLocY = (item.y/squareSize);

    // jos alue on pelikentän ulkopuolella tai ruudussa on jo putkenpala/merimonsteri
    if (item.x < 3*squareSize || item.x > 11*squareSize || item.y >6*squareSize || megaArray[newLocX][newLocY]!=undefined) {
        item.x = 0;
        item.y = currentY*squareSize;  //palauta siihen y-koordinaattiin, josta raahaaminen alkoi
    }
    else{
        unEnableDrag(item)
        item.x = newLocX*squareSize;
        item.y = newLocY*squareSize;

        //Debuggaus: console.log("Array1:" + megaArray[newLocX][newLocY])
        megaArray[newLocX][newLocY] = item;
        //Debuggaus: console.log("Array2:" + megaArray[newLocX][newLocY])

        //tässä alla luodaan uuttaa putkea otetun tilalle
        waitingRoom[currentY] = createPipe();
        checkNext(startCoord,2);
        updateW=true;
    }

};
