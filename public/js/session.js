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
  })
  $('#test2').on('click', function(e){
    // $('#test').hide();
    $('.login-modal2').css('visibility', 'visible');
    $('#container').css('opacity', '0.5')
  })
  // $('#test1').on('click', function(e){
  //   $('#test').hide();
  //   $('#login-modal').css('visibility', 'visible');
  //   $('#container').css('opacity', '0.5')
  // })
})
