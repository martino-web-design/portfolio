$(document).ready(function(){

//  Start function resets board and selects player to begin
  function start(){

    $('#game').click(function(){

      $('.modal-overlay').css('opacity','0');
      $('.square').removeClass('X').removeClass('O');

      // Player selection, randomly determines if X or O starts game
      var selection = Math.round(Math.random()+1);
      if (selection === 1){
        $('.modal-overlay').css('opacity','1');
        $('.modal-wrap p').text("Player X gets to go first!");
        player = 1;
      }
      else {
        $('.modal-overlay').css('opacity','1');
        $('.modal-wrap p').text("Player O gets to go first!");
        player = 2;
      }
      count = 0;
    });
  }

// Winner function, displays all winning combinations
  function winner(i){
    if ($('.1').hasClass(i) && $('.2').hasClass(i) && $('.3').hasClass(i)) {
      return true;
    }
    else if ($('.4').hasClass(i) && $('.5').hasClass(i) && $('.6').hasClass(i)) {
      return true;
    }
    else if ($('.7').hasClass(i) && $('.8').hasClass(i) && $('.9').hasClass(i)) {
      return true;
    }
    else if ($('.1').hasClass(i) && $('.4').hasClass(i) && $('.7').hasClass(i)) {
      return true;
    }
    else if ($('.2').hasClass(i) && $('.5').hasClass(i) && $('.8').hasClass(i)) {
      return true;
    }
    else if ($('.3').hasClass(i) && $('.6').hasClass(i) && $('.9').hasClass(i)) {
      return true;
    }
    else if ($('.1').hasClass(i) && $('.5').hasClass(i) && $('.9').hasClass(i)) {
      return true;
    }
    else if ($('.3').hasClass(i) && $('.5').hasClass(i) && $('.7').hasClass(i)) {
      return true;
    }

  }

// Tie function, determines if game is tied
  function tie(){
    if (count== 9){
      $('.modal-overlay').css('opacity','1');
      $('.modal-wrap p').text("It's a tie, have another go!");
    }
  }
// ----- end of functions ------

//  ----- Start Game -----
alert("Decide who wants to be player X or player O to begin.");
start();
win_1 = 0;
win_2 = 0;

// ----- game play begins with click function
  $('.square').click(function(){
    $('#x-start').hide();
    $('.modal-overlay').css('opacity','0');
   if ($(this).hasClass('X') || $(this).hasClass('O') ){
     $('.modal-overlay').css('opacity','1');
     $('.modal-wrap p').text("This spot is already taken, try again!");
    }

   else {
        if (player === 1) {
          $(this).addClass('X');

           if (winner('X')){
             $('.modal-overlay').css('opacity','1');
             $('.modal-wrap p').text("Player X is the winner!");
             win_1+= 1;
             $('#win_1').text("Player X has " + win_1 + " win!");
             if(win_1>1){
               $('#win_1').text("Player X has " + win_1 + " wins!");
             }
            }
            else {
              count+= 1;
              tie()
              player = 2;
            }
        }
        else {
          $(this).addClass('O');

          if (winner('O')){
            $('.modal-overlay').css('opacity','1');
            $('.modal-wrap p').text("Player O is the winner!");
            win_2+= 1;
            $('#win_2').text("Player O has " + win_2 + " win!");
            if(win_2>1){
              $('#win_2').text("Player O has " + win_2 + " wins!");
            }
           }
           else {
             count+= 1;
             tie()
             player = 1;
           }
        }
    }
  }); // ----- end square click function
}); // ----- end document ready function
