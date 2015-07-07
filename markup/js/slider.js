jQuery(document).ready(function(){
	function htmSlider(){
		var slideWrap = jQuery('.slide-wrap');
		var nextLink = jQuery('.next-slide');
		var prevLink = jQuery('.prev-slide');
		var playLink = jQuery('.auto');
		var is_animate = false;
		var slideWidth = jQuery('.slide-item').outerWidth();
		var newLeftPos = slideWrap.position().left - slideWidth;
		var scrollSlider = slideWrap.position().left - slideWidth;
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {
				slideWrap.animate({left: newLeftPos}, 1000, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});
			}
		});
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 1000);
			}
		});
		timer = setInterval(function(){
		 slideWrap.animate({left: scrollSlider}, 1000, function(){
		  slideWrap
		   .find('.slide-item:first')
		   .appendTo(slideWrap)
		   .parent()
		   .css({'left': 0});
		  });
		}, 3000);
  	}
	htmSlider();
});