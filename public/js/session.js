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
})
