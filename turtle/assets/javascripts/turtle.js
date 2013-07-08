$(document).ready(function() {
  var left_position = {
    north_america: 345,
    south_america: 508,
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