$(document).ready(function(){

// Modal
var modalGreeting = "<h1>Guitar Tuner</h1>";
modalGreeting+= "<p>Select your tuning preference</p>";
modalGreeting+="<p>Tap on string to hear it's tone</p>";

  $('.modal-wrap div').html(modalGreeting);

$('.material-icons').click(function(){
  $('.modal-overlay').css('display','none');
});

// Audio
// for string 6
const audioD6= document.querySelector("audio.D6");
const audioE6= document.querySelector("audio.E6");
// for string 5
const audioA5= document.querySelector("audio.A5");
const audioB5= document.querySelector("audio.B5");
const audioG5= document.querySelector("audio.G5");
// for string 4
const audioD4= document.querySelector("audio.D4");
const audioE4= document.querySelector("audio.E4");
// for string 3
const audioF3sharp= document.querySelector("audio.F3sharp");
const audioG3= document.querySelector("audio.G3");
const audioG3sharp= document.querySelector("audio.G3sharp");
// for string 2
const audioA2= document.querySelector("audio.A2");
const audioB2= document.querySelector("audio.B2");
// for string 1
const audioD1= document.querySelector("audio.D1");
const audioE1= document.querySelector("audio.E1");

// Strings
const string6= document.querySelector("li.E6");
const string5= document.querySelector("li.A5");
const string4= document.querySelector("li.D4");
const string3= document.querySelector("li.G3");
const string2= document.querySelector("li.B2");
const string1= document.querySelector("li.E1");

// Keys
const all = document.getElementsByTagName('li');
for (let i = 0; i< all.length; i+=1){
  all[5].style.color='orange';
  all[4].style.color='red';
  all[3].style.color='brown';
  all[2].style.color='green';
  all[1].style.color='purple';
  all[0].style.color='silver';
}

function color(x){
  all[x].style.transition='all 0s linear .5s';
  all[x].style.color='#000';
  all[x].style.backgroundColor='yellow';
  all[x].style.borderRadius='50px';
}
function removeColor(x,y){
  all[x].style.color= y;
  all[x].style.backgroundColor='';
  all[x].style.borderRadius='';
}

// Chord selection
  $('select').change(function(){
     var selection = $('select').val();
  if(selection =='stan'){

    $(all[5]).text('E');
    $(all[4]).text('B');
    $(all[3]).text('G');
    $(all[2]).text('D');
    $(all[1]).text('A');
    $(all[0]).text('E');
  }
  else if(selection =='D') {

    $(all[5]).text('D');
    $(all[4]).text('A');
    $(all[3]).html('F<small>#</small>');
    $(all[2]).text('D');
    $(all[1]).text('A');
    $(all[0]).text('D');
  }
  else if(selection =='E'){
    $(all[5]).text('E');
    $(all[4]).text('B');
    $(all[3]).html('G<small>#</small>');
    $(all[2]).text('E');
    $(all[1]).text('B');
    $(all[0]).text('E');
  }
  else if(selection =='G'){
    $(all[5]).text('D');
    $(all[4]).text('B');
    $(all[3]).text('G');
    $(all[2]).text('D');
    $(all[1]).text('G');
    $(all[0]).text('D');
  }
});

// Chord value
function chord(){
  var choice = document.querySelector('select');
  newChoice= $(choice).val();
}

// Strings
$(string6).click(function(){
  chord();
  if(newChoice =='D' || newChoice =='G'){
    audioD6.play();
  }
  else {
    audioE6.play();
  }
  color(0);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(0,'silver');
    $('.E6').removeClass('shake');
  }
});

$(string5).click(function(){
  chord();
  if(newChoice =='E'){
    audioB5.play();
  }
  else if(newChoice =='G'){
    audioG5.play();
  }
  else {
    audioA5.play();
  }
  color(1);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(1,'purple');
    $('.A5').removeClass('shake');
  }
});

$(string4).click(function(){
  chord();
  if(newChoice =='E'){
    audioE4.play();
  }
  else {
    audioD4.play();
  }
  color(2);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(2,'green');
    $('.D4').removeClass('shake');
  }
});

$(string3).click(function(){
  chord();
  if(newChoice =='D'){
    audioF3sharp.play();
  }
  else if(newChoice =='E'){
    audioG3sharp.play();
  }
  else {
    audioG3.play();
  }
  color(3);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(3,'brown');
    $('.G3').removeClass('shake');
  }
});

$(string2).click(function(){
  chord();
  if(newChoice =='D'){
    audioA2.play();
  }
  else {
    audioB2.play();
  }
  color(4);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(4,'red');
    $('.B2').removeClass('shake');
  }
});

$(string1).click(function(){
  chord();
  if(newChoice =='D' || newChoice =='G' ){
    audioD1.play();
  }
  else {
    audioE1.play();
  }
  color(5);
  $(this).addClass('shake');

  setTimeout(bye, 3500);
  function bye(){
    removeColor(5,'orange');
    $('.E1').removeClass('shake');
  }
});

}); // end Script
