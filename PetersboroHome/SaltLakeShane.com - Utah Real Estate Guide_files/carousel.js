(function($){
	$.fn.liquidcarousel = function(options) {

	var defaults = {
		height: 150,
		duration: 500,
		hidearrows: true
	};
	
	var options = $.extend(defaults, options);

    return this.each(function() {
			var divobj = $(this);

			$(divobj).height(options.height);
			$(divobj).css('overflow', 'hidden');

			$('> .wrapper', divobj).height(options.height);
			$('> .wrapper', divobj).css('overflow', 'hidden');
			$('> .wrapper', divobj).css('float', 'left');

			$('> .wrapper > ul', divobj).height(options.height);
			$('> .wrapper > ul', divobj).css('float', 'left');
			$('> .wrapper > ul', divobj).css('margin', '0');
			$('> .wrapper > ul', divobj).css('padding', '0');
			$('> .wrapper > ul', divobj).css('display', 'block');

			$('> .wrapper > ul > li', divobj).height(options.height);
			$('> .wrapper > ul > li', divobj).css('display', 'block');
			$('> .wrapper > ul > li', divobj).css('float', 'left');

			$('> .wrapper', divobj).width($(divobj).width() - 90);
			$('> ul', divobj).width($(divobj).width() - 90);

			var totallis = $('> .wrapper > ul > li', this).length;
			var currentposition = 0;
			var liwidth = $('> .wrapper > ul > li:first', divobj).outerWidth(true);
			var visiblelis = Math.floor((($(divobj).width() - 90) / liwidth));
            var additionalmargin = Math.floor(($(divobj).width() - ((visiblelis * liwidth) + 90)) / visiblelis);
			var totalwidth = liwidth + additionalmargin;
			var newMargin = additionalmargin + 'px';

			$('> .wrapper > ul > li', divobj).css('margin-left', newMargin);
			$('> .previous', divobj).css('opacity','.25');
            
            if(totallis < visiblelis)
			  $('> .next', divobj).css('opacity','.25');
            
			$('> .next', divobj).click(function(){
			    if(totallis > visiblelis)
			      {
				  $('> .next', divobj).css('opacity','1.0');
				  $('> .previous', divobj).css('opacity','1.0');
                  }
                  
				if (totallis <= visiblelis) {
					currentposition = 0;
					$('> .next', divobj).css('opacity','.25');
				} else if ((currentposition + (visiblelis*2)) < totallis) {
					currentposition += visiblelis;
				} else if ((currentposition + (visiblelis*2)) >= totallis -1) {
					currentposition = totallis - visiblelis;
					$('> .next', divobj).css('opacity','.25');
				}
				$('> .wrapper > ul', divobj).stop();
				$('> .wrapper > ul', divobj).animate({'marginLeft': -(currentposition * totalwidth)}, options.duration);
			});

			$('> .previous', divobj).click(function(){
			    if(totallis > visiblelis)
			      {
				  $('> .next', divobj).css('opacity','1.0');
				  $('> .previous', divobj).css('opacity','1.0');
                  }
                  
				if ((currentposition - visiblelis) > 0) {
					currentposition -= visiblelis;
				} else if ((currentposition - (visiblelis*2)) <= 0) {
					currentposition = 0;
					$('> .previous', divobj).css('opacity','.25');
				}
				$('> .wrapper > ul', divobj).stop();
				$('> .wrapper > ul', divobj).animate({'marginLeft': -(currentposition * totalwidth)}, options.duration);
			});

			$('> .next', divobj).dblclick(function(e){
				e.preventDefault();
				clearSelection();
			});

			$('> .previous', divobj).dblclick(function(e){
				e.preventDefault();
				clearSelection();
			});

			function clearSelection() {
				if (document.selection && document.selection.empty) {
					document.selection.empty();
				} else if (window.getSelection) {
					var sel = window.getSelection();
					sel.removeAllRanges();
				}
			}
    });
 };
})(jQuery);

