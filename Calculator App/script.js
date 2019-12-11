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


  if(inputOne.textContent != "" && operator.textContent != "" ){

    number = this.textContent;
    $('#input2').append(number);
    calc();
    totalCount.textContent = totalAmount;
    display.textContent = inputTwo.textContent;

    console.log("tot", totalAmount)
    }

  else if (operator.textContent != ""){

    number = this.textContent;
    inputOne.textContent = parseFloat(totalCount.textContent);
    display.textContent = inputOne.textContent;
    console.log("el if",inputOne.textContent)
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

  if (operator.textContent == "" && inputTwo.textContent == ""){
    operator.textContent = this.textContent;
    display.textContent = inputOne.textContent;

    console.log("first oper")
    }

  else if (inputOne.textContent != "" && inputTwo.textContent != "" && operator.textContent != ""){

    operator.textContent = this.textContent;
    display.textContent = totalCount.textContent;
    inputOne.textContent = totalCount.textContent;
    inputTwo.textContent = "";

    console.log("additional opers")
  }
});

// --- Equal button ---
$('button.equal').click(function(){

     calc();
     console.log(totalAmount)
     totalCount.textContent = totalAmount
     if (totalCount.textContent != ""){
       inputOne.textContent = parseFloat(totalCount.textContent);
       display.textContent = parseFloat(totalCount.textContent);
     }

 });

// ---- Clear button ----

$('button#clear').click(function(){
  $('#input1').text("");
  $('#input2').text("");
  $('#operator').text("");
  $('#total').text("");
  $('#display').text("");

});
