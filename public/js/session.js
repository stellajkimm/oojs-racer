$(document).ready(function(){
  $('#signup-form').hide();
  $('#signup-button').on('click', function(e){
    $('#signup-button').hide();
    $('#signup-form').show();
  })
  $('#player-1-login').on('click', function(e){
    // $('#test').hide();
    $('.login-modal').css('visibility', 'visible');
    $('#avatar1').css('visibility', 'visible');
    $('#container').css('opacity', '0.5')
  })
  $('#player-2-login').on('click', function(e){
    // $('#test').hide();
    $('.login-modal2').css('visibility', 'visible');
    $('#avatar2').css('visibility', 'visible');
    $('#container').css('opacity', '0.5')
  })
  $('.login-form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "/login",
      data: $(this).serialize()
    }).done(function(response){
      $('.login-modal').css('visibility', 'hidden')
      if($('.login-form2').css('visibility') == 'hidden'){
        $('#container').css('opacity', '1')
      }
    })
  })
  $('.login-form2').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "/login",
      data: $(this).serialize()
    }).done(function(response){
      $('.login-modal2').css('visibility', 'hidden')
      if($('.login-form').css('visibility') == 'hidden'){
        $('#container').css('opacity', '1')
      }
    })
  })

  // appends avatar image_url to player
  $('#avatar1 .choose-avatar div').on('click', function(){
      $(this).parent().parent().css('visibility', 'hidden');
      player1.avatar = $(this).children().attr('src')
      $('#player1_strip td:first-child').html('<img src="' + player1.avatar + '" height="42" width="42" >')
  })

  $('#avatar2 .choose-avatar div').on('click', function(){
      $(this).parent().parent().css('visibility', 'hidden');
      player2.avatar = $(this).children().attr('src')
      $('#player2_strip td:first-child').html('<img src="' + player2.avatar + '" height="42" width="42" >')
  })
})
