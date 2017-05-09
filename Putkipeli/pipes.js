//uusi putki-olio, joka ottaa ominaisuuksia alla olevista "putkityypeistä"
function createPipe(){
    var arvottu = allPipes[randomPipe()];
    return arvottu;
};


//Jokaisella putkella on tiedossa, mitkä reunat ovat "auki"
//kellonsuuntaan, eli up:1, down:3, left:4, right:2
//origY-kohtaan tallennetaan y-koordinaatti, kun putki poimitaan
//waitingroomista. (Näin se virhesiirron kohdalla osataan palauttaa
//takaisin paikalleen.)
var straight1={
    open: [1,3],    //up:1, down:3, left:4, right:2
    img: 'straight1',
    origY: 0
};
var straight2={
    open: [2,4],
    img: 'straight2',
    origY: 0
};
var corner1={
    open: [1,2],
    img: 'corner1',
    origY: 0
};
var corner2={
    open: [2,3],
    img: 'corner2',
    origY: 0
};
var corner3={
    open: [3,4],
    img: 'corner3',
    origY: 0
};
var corner4={
    open: [1,4],
    img: 'corner4',
    origY: 0
};
var startingPipe={
    open: [2],
    img: 'start'
};
var allPipes = [
    straight1,
    straight2,
    corner1,
    corner2,
    corner3,
    corner4
];

//Arpoo kokonaisluvun väliltä min,....,max-1
function getRandomInteger(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
};

//Hakee lukua vastaavan putken Arraysta
function randomPipe(){
    var x = getRandomInteger(0, (allPipes.length-1));
    return x
}

//Annetaan putkelle liikuteltavuus
function enableDrag(pipe){
    pipe.inputEnabled = true;
    pipe.input.enableDrag(true);
    pipe.events.onDragStart.add(onDragStart, this);
    //pipe.events.onDragStop.add(onDragStop, this);
}

//Poistetaan liikuteltavuus
function unEnableDrag(pipe){
    pipe.inputEnabled = false;
    pipe.input.enableDrag(false);
}

var currentY;
function getCurrentY(){currentY};

//Debuggausrivi: tarkastellaan hiiren Y-koordinaatin ja currentY:n arvoja
function onDragStart(sprite, pointer){
  //currentY = Math.floor(pointer.y/squareSize);
  result = sprite.key + " starts at y:" + pointer.y + " and currentY:" +currentY
}

//lisää putken peliruudukkoon
function addPipe(pipe, x, y){
    megaArray[x][y] = pipe;
};

//poistaa putken peliruudukosta
function deletePipe(pipe, x, y){
    delete megaArray[pipe[x]][pipe[y]];
};

var connectedArray = [];

//palauttaa vastasuunnan
function oppositeDir(prevDir){
  if(prevDir==1) return 3;
  if(prevDir==2) return 4;
  if(prevDir==3) return 1;
  if(prevDir==4) return 2;
};

//Tästä ruudusta aloitetaan tarkastelu aina
var startCoord = [3, 5]

//tähän tallennetaan seuraava tarkasteltava ruutu. Alustetaan aina
//startCoord:lla tarkastelun alussa ja päivitetään tarkastelun edetessä
var nextCoord = startCoord

//suunnasta riipuen tallennetaan seuraavan "ruudun" koordinaatit nextCoord:iin
function updateNextFromMega(dir){
 if(dir==1) return nextCoord = [nextCoord[0],nextCoord[1]-1];
 if(dir==2) return nextCoord = [nextCoord[0]+1,nextCoord[1]];
 if(dir==3) return nextCoord = [nextCoord[0],nextCoord[1]+1];
 if(dir==4) return nextCoord = [nextCoord[0]-1,nextCoord[1]];
};

// metodi, jolla tarkistetaan seuraavan ruudun tilanne.
// Rekursiivinen, eli jatketaan, kunnes vastaan tulee voitto/tappio/tyhjä ruutu
// esim. checkNext(startCoord,2)
function checkNext(coords, prevDir){
  //voittoehto, eli on päästy "maaliin"
  if(coords[0]==12 && coords[1]==1){
    //Debuggaus: console.log("WINWIN!!");
    win=true
  }
  //jos putkisto päättyy seinään
  else if(coords[0] <3 || coords[0]>11 || coords[1]<0 || coords[1]>6 ){
    //Debuggaus: console.log("YOU LOST :(");
    lose=true
  }
  //jos seuraava ruutu onkin tyhjä, peli jatkuu. Alustetaan nextCoord
  //takaisin alkuarvoon seuraavaa tarkastusta varten
  else if(megaArray[coords[0]][coords[1]] == undefined){
    //Debuggaus: console.log("loppui: "+ coords)
    nextCoord=startCoord
  }
  else{
    //Debuggaus: console.log(coords + " + PrevDir:" + prevDir)

    //Nyt tiedetään, että ruudussa on jotain. Haetaan sen spriten
    //tyyppi (customPipeIndex). Jos kyseessä ei ole putki, ei löydetä mitään
    //ja ruudussa on siis oltava merimonsteri
    var tyyppi = megaArray[coords[0]][coords[1]].customPipeIndex
    if(allPipes[tyyppi]== undefined){
      lose=true                 //<--- törmättiin merimonsteriin
    }else{                      //<--- löytyi seuraava putki
      var comingDir = oppositeDir(prevDir);                   //jos edellinen putki avautui oikealle, tarkistetaan vasen jne.
      var indeksi = allPipes[tyyppi].open.indexOf(comingDir); //avautuuko putkipala oikeaan suuntaan?
      if(indeksi==-1){          //<--- ei avaudu: putki törmää itseensä ja peli loppuu
        //nextCoord=startCoord
        lose=true
      }else{                    //<--- avautuu
        connectedArray.push(coords);
        var direction;          // tallennetaan muuttujaan uuden putken toinen suuaukko
        if (indeksi==0){
          direction = allPipes[tyyppi].open[1]
        }else{
          direction = allPipes[tyyppi].open[0]
        };
        updateNextFromMega(direction); //etsitään suuaukon suuntainen "ruutu" megaArraysta
        //Debuggaus: console.log("NextCoord: " + nextCoord);

        //kutsutaan metodia uudelleen
        checkNext(nextCoord, direction)
      }
    }
  }
}
