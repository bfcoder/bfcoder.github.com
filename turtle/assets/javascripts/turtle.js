$(document).ready(function() {
  var word_position = {
    australia: 1491,
    asia: 1287,
    europe: 903,
    africa: 914,
    antarctica: 867,
    north_america: 346,
    south_america: 464
  }

  var index = 0;
  var duration = 1250;
  // var duration = 50;
  var total_duration = 0;

  $('#narrative_audio').trigger('play');

  $.each(word_position, function(key, value){
    index++;

    setTimeout(function(){
      $('.'+key).animate(
      { left: value }, {
        duration: duration,
        easing: 'easeInOutElastic'
      });
    }, duration * index + 300);

    total_duration = duration * index + index * 300;

  });

  $('#narrative_audio').on('ended', function() {
    $.when(popIn({animal: "shark", duration: 10})).done(function() {
      setTimeout(function(){
        $.when(popIn({animal: "green_sea_turtle", duration: 10})).done(function() {
          setTimeout(function() {
            popIn({animal: "leopard_seal", duration: 10});
          }, 200);
        });
      }, 200);
    });
  });

  var popIn = function(params) {
    $('.'+params.animal).show();
    $('#pop_noise_audio').trigger('play');
    return $('.'+params.animal).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.05)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.15)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.25)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.35)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.45)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.55)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.65)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.75)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.85)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.95)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(1)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(1.05)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(1.1)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(1.15)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(1.1)');
      }, duration: params.duration * 0.25
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(1.05)');
      }, duration: params.duration * 0.25
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(1.02)');
      }, duration: params.duration * 0.25
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(1)');
      }, duration: params.duration * 0.25
    });
  };

  $('.animal_image').on('click', function() {
    $('.'+$(this).data('type')+'_fact').fadeToggle("slow");
  });

});