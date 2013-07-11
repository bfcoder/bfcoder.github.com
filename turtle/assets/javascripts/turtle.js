$(document).ready(function() {
  var word_position = {
    australia: 1410,
    asia: 1240,
    europe: 880,
    africa: 880,
    antartica: 800,
    north_america: 333,
    south_america: 430
  }

  var index = 0;
  var duration = 1250;
  var total_duration = 0;
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

  setTimeout(function(){
    popIn({animal: "shark", duration: 27});
  }, total_duration);

  var popIn = function(params) {
    $('.'+params.animal).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.35)');
      }, duration: params.duration * 0.5
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.45)');
      }, duration: params.duration * 0.5
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.55)');
      }, duration: params.duration * 0.5
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.65)');
      }, duration: params.duration * 0.5
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.70)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.75)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.8)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.85)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.9)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.95)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.9)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.85)');
      }, duration: params.duration
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.8)');
      }, duration: params.duration
    });
  };

});