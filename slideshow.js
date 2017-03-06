
var current = 0;
var articlecount = 2; //make this 1 less than actual count
var intervalOn = true;



function setcurrent() {
  if ((localStorage.getItem('index') === undefined) || (localStorage.getItem('index') === null) || (localStorage.getItem('index') > articlecount)) {
    localStorage.setItem('index', 0);
    current = 0;
  } else {
    current = parseInt(localStorage.getItem('index'));
  }
}

function kutsuJSON() {
        $.getJSON("https://honkame2.firebaseio.com/uutiset.json", function (data) {

          $('#ss-otsikko').html(data[current].otsikko);
          $('#ss-artikkeli').html(data[current].sisältö);
          $('#ss-pvm').html(data[current].päivämäärä);

      //
      return data;
    });
}

function animoi() {
  $('.effekti').fadeOut('slow', function() {
    kutsuJSON();
    $('.effekti').fadeIn('slow');
});
}

function muutos() {
  if (current === articlecount) {
    current = 0;
  }  else {
    current = current + 1;
  }
  console.log(current);
  animoi();
  localStorage.setItem('index', current);
}

var ajastin =  setInterval(function(){muutos();},8000);


window.onload = function () {
  $("#button-stop").text("Pause");
  console.log(current);
  setcurrent();
  console.log(current);
  $.getJSON("https://honkame2.firebaseio.com/uutiset.json", function (data) {
    console.log(data);
    $('#ss-otsikko').html(data[current].otsikko);
    $('#ss-artikkeli').html(data[current].sisältö);
    $('#ss-pvm').html(data[current].päivämäärä);
    ajastin;
    return data;
  });

};

//$("#button-stop").text("Pause")


function pauseSS() {
  console.log(intervalOn);
  if(intervalOn){
    clearInterval(ajastin);
    intervalOn = false;
    $("#button-stop").text("Resume");
  } else {
    ajastin =  setInterval(function(){muutos();},8000);
    ajastin;
    intervalOn = true;
    $("#button-stop").text("Pause");
  }

}

function prevSS() {

  if (current === 0){
    current = articlecount;
  } else {
    current -= 1;
  }
  if(intervalOn){
    pauseSS();
  }
  $('.effekti').fadeOut(400);
  localStorage.setItem('index', current);
  $('.effekti').fadeIn(400);
  animoi();
}

function nextSS(){
  if(intervalOn){
    pauseSS();
  }
  if (current === articlecount){
    current = 0;
  } else {
    current += 1;
  }
  localStorage.setItem('index', current);
  animoi();
}
