$(document).ready(function(){
  var game = function() {
    this.player1 = $(document).on('keypress', function(e){
        console.log("hi")
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

    var player2 = $(document).keypress(function(e){
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
      $.ajax({
        url: '/score_screen',
        data: "hello",
        success: function(data){

        },
        fail: function(){
          alert("There was an error. BACK TO THE SANDBOX")
          $.get('/')
        }
      })
    }
  }

  function restartGame(){
    $('#player1_strip td').first().next().addClass('active');
    $('#player2_strip td').first().next().addClass('active');
    $('#player1_strip td').last().removeClass('active');
    $('#player2_strip td').last().removeClass('active');
  }
  $('button#start_game').on('click', function(e){
    game();
  })
});
