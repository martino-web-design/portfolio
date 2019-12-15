const display = document.querySelector('#display');

const inputOne = document.querySelector('#input1');
const inputTwo = document.querySelector('#input2');
const operator = document.querySelector('#operator');
const totalCount = document.querySelector('#total');
// ----  Calc Function ----

function calc(){
   one = parseFloat(inputOne.textContent);
   two = parseFloat(inputTwo.textContent);
   oper = operator.textContent;
   totalAmount= "";

  if (oper == "+"){
    totalAmount = one + two;
  }
  else if (oper == "-"){
    totalAmount = one - two;
  }
  else if (oper == "/"){
    totalAmount = one / two;
  }
  else if (oper == "*"){
    totalAmount = one * two;
  }

}

// --- Number buttons ---
$('button.num').click(function(){
   
  let e = event.target;
  e.classList.add('color');
  setTimeout(function(){
    e.classList.remove('color');
  },200); 

  if(inputOne.textContent != "" && operator.textContent != "" ){

    number = this.textContent;
    $('#input2').append(number);
    calc();
    totalCount.textContent = totalAmount;
    display.textContent = inputTwo.textContent;

    console.log("tot", totalAmount)
    }

  else {
    number = this.textContent;
    $('#input1').append(number);
    $('#display').append(number);

    console.log("else",inputOne.textContent)
    console.log("n",number)
  }
});

// --- Operator buttons ---
$('button.oper').click(function(){

  let e = event.target;
  e.classList.add('color');
  setTimeout(function(){
    e.classList.remove('color');
  },200);

  if (operator.textContent == "" && inputTwo.textContent == ""){
    operator.textContent = this.textContent;
    display.textContent = inputOne.textContent;

    console.log("first oper")
    }

  else if (inputOne.textContent != "" && inputTwo.textContent != "" && operator.textContent != ""){

    operator.textContent = this.textContent;
    display.textContent = totalAmount.toLocaleString();
    inputOne.textContent = totalCount.textContent;
    inputTwo.textContent = "";

    console.log("additional opers")
  }
});

// --- Equal button ---
$('button.equal').click(function(){
  let e = event.target;
  e.classList.add('color');
  setTimeout(function(){
    e.classList.remove('color');
  },200);

  calc();
  console.log(totalAmount);
  totalCount.textContent = totalAmount;
  display.textContent = totalAmount.toLocaleString();
 });

// ---- Clear button ----

$('button#clear').click(function(){
  $('#input1').text("");
  $('#input2').text("");
  $('#operator').text("");
  $('#total').text("");
  $('#display').text("");

});
