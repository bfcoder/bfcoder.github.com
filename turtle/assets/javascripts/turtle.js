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
  var duration = 50;
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
    doSomething();
  }, total_duration);

  var doSomething = function() {
    $('.shark').animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.75)');
      }, duration: 27
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.8)');
      }, duration: 27
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.85)');
      }, duration: 27
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.9)');
      }, duration: 27
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.95)');
      }, duration: 27
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.9)');
      }, duration: 27
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.85)');
      }, duration: 27
    }).animate({ opacity: 1 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','scale(0.8)');
      }, duration: 27
    });
  };

});