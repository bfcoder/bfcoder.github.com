$(document).ready(function() {
  setTimeout(function(){

    var left_position = {
      north_america: 345,
      south_america: 508,
      africa: 880
    }
    $.each(left_position, function(key, value){

      $('.'+key).animate(
      { left: value }, {
        duration: 1250,
        easing: 'easeInOutElastic'
      });

    });

    var right_position = {
      europe: 880,
      asia: 1240,
      australia: 1410,
      antartica: 800
    }
    $.each(right_position, function(key, value){

      $('.'+key).animate(
      { left: value }, {
        duration: 1250,
        easing: 'easeInOutElastic'
      });

    });

  },6000);

});