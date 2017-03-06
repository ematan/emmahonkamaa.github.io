function getRandomInteger(min, max) {
    "use strict";
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNro = getRandomInteger(1, 10);

function compareNumbers(first, second) {
    "use strict";
    return first === second;
}

function guessTheNumber() {
    "use strict";
    var arvaus = document.getElementById("inputField").value;
    arvaus = parseFloat(arvaus);
    if ((arvaus % 1 === 0) && arvaus < 11 && arvaus > 0) {
        arvaus = parseInt(arvaus, 10);
        if (compareNumbers(arvaus, randomNro)) {
            window.alert("voitto!");
            randomNro = getRandomInteger(1, 10);
        } else {
            window.alert("Väärin meni! Olisi ollut: " + randomNro + ", mutta arvasit: " + arvaus);
            randomNro = getRandomInteger(1, 10);
        }
    } else {
        window.alert("lukusi ei kelpaa  :(");
    }
}

var submitBtn = document.getElementById("button");

submitBtn.onclick = function () {
    "use strict";
    guessTheNumber();
};
    
window.onload = function () {
    "use strict";
    randomNro = getRandomInteger(1, 10);
};