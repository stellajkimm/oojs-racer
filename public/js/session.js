$(document).ready(function(){
  $('#signup-form').hide();
  $('#signup-button').on('click', function(e){
    $('#signup-button').hide();
    $('#signup-form').show();
  })
  $('#test').on('click', function(e){
    $('#test').hide();
    $('#login-modal').css('visibility', 'visible');
    $('#container').css('opacity', '0.5')
  })
})
