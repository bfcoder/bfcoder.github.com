$(document).ready(function() {
  var position = {
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
  $.each(position, function(key, value){
    index++;

    setTimeout(function(){
      $('.'+key).animate(
      { left: value }, {
        duration: duration,
        easing: 'easeInOutElastic'
      });
    }, duration * index + 300);

  });

});