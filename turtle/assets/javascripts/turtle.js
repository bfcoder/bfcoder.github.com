$(document).ready(function() {
  var left_position = {
    north_america: 345,
    south_america: 508,
    africa: 975
  }
  $.each(left_position, function(key, value){

    $('.'+key).animate(
    { left: value }, {
      duration: 1250,
      easing: 'easeInOutElastic'
    });

  });

  var right_position = {
    europe: 240,
    asia: -140,
    australia: -400,
    antartica: 200
  }
  $.each(right_position, function(key, value){

    $('.'+key).animate(
    { right: value }, {
      duration: 1250,
      easing: 'easeInOutElastic'
    });

  });

});