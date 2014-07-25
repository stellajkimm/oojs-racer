$(document).ready(function(){
  var players = {
    //Player 1
    $(document).on('keypress', function(e){
      e.preventDefault();
      var activeTd = $('#player1_strip td.active');
      var lastTd = $('#player1_strip td').last();

      if ( e.which === 97 ){
        $(activeTd).next().addClass('active');
        $(activeTd).removeClass('active');
      }
      if( lastTd.hasClass('active') ){
        gameOver(1);
      }
    });

    //Player 2
    $(document).keypress(function(e){
      e.preventDefault();
      var activeTd = $('#player2_strip td.active');
      var lastTd = $('#player2_strip td').last();
      if( e.which === 112 ){
        $(activeTd).next().addClass('active');
        $(activeTd).removeClass('active');
      }
      if( lastTd.hasClass('active') ){
        gameOver(2);
      }
    })
  }

  function gameOver(playerNumber){
    $(document).off();
    alert("Player "+playerNumber+" has won!");
    var question = confirm("Restart?") ;
    if (question == true){
      restartGame();
    }else{
      console.log("poop");
    }

  }
  function restartGame(){
    console.log("butt");
    $('#player1_strip td').first().next().addClass('active');
    $('#player2_strip td').first().next().addClass('active');
    $('#player1_strip td').last().removeClass('active');
    $('#player2_strip td').last().removeClass('active');
  }
});
