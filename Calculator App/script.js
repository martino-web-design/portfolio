


// ----  Calc Function ----

function calc(){
  var one = parseFloat($('#input1').text());
  var two = parseFloat($('#input2').text());
  var oper = $('#operator').text();
  var total;

  if (oper == "+"){
    total = one + two;
  }
  else if (oper == "-"){
    total = one - two;
  }
  else if (oper == "/"){
    total = one / two;
  }
  else if (oper == "*"){
    total = one * two;
  }
  total = total.toLocaleString();
  $('#input2').hide();
  $('#total').text(total).show();

}

// --- Number buttons ---
$('button.num').click(function(){
   if ($('#operator').html()!=''){
     $('#operator').hide();
     $('#input2').show();
     $('#input2').append(this.id).innerText();
   }
   else if(this){
     $('#input1').append(this.id).innerText();
   }
});

// --- Operator buttons ---
$('button.oper').click(function(){
   if(this){
      var clicked = this.innerHTML;
      $('#operator').html(clicked);
      $('#input1').hide();
      $('#operator').show();
  }
});

// --- Equal button ---
$('button.equal').click(function(){
  if(this){
    calc();
  }
 });

// ---- Clear button ----
$('button#clear').click(function(){
  $('#input1').text("");
  $('#input2').text("").hide();
  $('#operator').text("").hide();
  $('#total').text("").hide();
  $('#input1').show();
});
