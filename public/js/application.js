// $(document).ready(function(){
//
//   var movePlayer = function(playerName, keyCode, event){
//     var activeTd = $('#'+playerName+'_strip td.active');
//     var lastTd = $('#'+playerName+'_strip td').last();
//
//     if ( event.which === keyCode ){
//       $(activeTd).next().addClass('active');
//       $(activeTd).removeClass('active');
//     }
//     if( lastTd.hasClass('active') ){
//       gameOver(playerName);
//     }
//   }
//
//   var game = function() {
//     var player1 = $(document).on('keypress', function(event){
//       event.preventDefault();
//       movePlayer("player1", 97, event)
//     });
//
//     var player2 = $(document).keypress(function(event){
//       event.preventDefault();
//       movePlayer("player2", 112, event)
//     })
//   }
//
//   var gameOver = function(playerName){
//     $(document).off();
//     alert(playerName+" has won!");
//     var question = confirm("Restart?") ;
//     if (question == true){
//       restartGame();
//     }else{
//       $.ajax({
//         type: "POST",
//         url: '/game',
//         // data: "hello",
//         success: function(data){
//           $('body').html(data)
//         },
//         fail: function(){
//           alert("There was an error. BACK TO THE SANDBOX")
//           $.get('/')
//         }
//       })
//     }
//   }
//
//   var restartGame = function(){
//     $('#player1_strip td.active').removeClass('active');
//     $('#player2_strip td.active').removeClass('active');
//     $('#player1_strip td:nth-child(2)').addClass('active');
//     $('#player2_strip td:nth-child(2)').addClass('active');
//     game();
//   }
//
//   $('button#start_game').on('click', function(e){
//     game();
//   })
// });
