$(document).ready(function() {
  var left_position = {
    north_america: 333,
    south_america: 430,
    africa: 880,
    europe: 880,
    asia: 1240,
    australia: 1410,
    antartica: 800
  }

  var index = 0;
  var duration = 1250;
  $.each(left_position, function(key, value){
    index++;

    setTimeout(function(){
      $('.'+key).animate(
      { left: value }, {
        duration: duration,
        easing: 'easeInOutElastic'
      });
    }, duration * index);

  });

});