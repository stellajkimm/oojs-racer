$(document).ready(function(){
  $('#signup-form').hide();
  $('#signup-button').on('click', function(e){
    $('#signup-button').hide();
    $('#signup-form').show();
  })
  $('#test1').on('click', function(e){
    // $('#test').hide();
    $('.login-modal').css('visibility', 'visible');
    $('#container').css('opacity', '0.5')
    // $('.login-form:first-child').attr('value', 'user_one')
  })
  $('#test2').on('click', function(e){
    // $('#test').hide();
    $('.login-modal2').css('visibility', 'visible');
    $('#container').css('opacity', '0.5')
    // $('.login-form:first-child').attr('value', 'user_two')
  })
  // $('#test1').on('click', function(e){
  //   $('#test').hide();
  //   $('#login-modal').css('visibility', 'visible');
  //   $('#container').css('opacity', '0.5')
  // })
})
