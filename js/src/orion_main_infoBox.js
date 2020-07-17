// orion_main_infoBox.js

(function($){


	var win = $(window);
	var winH = win.innerHeight();
	var winHPart = winH / 4 * 2;

	win.scrollTop(0);
	
	
	var infoBox = $('#infoBox');
	var infoBoxOffset = infoBox.offset().top;
	var infoBoxH3 = infoBox.find('h3');
	var infoBoxP = infoBox.find('p');

	h3Offset = infoBoxH3.offset().top;

	infoBox.hide();
	
	win.on('scroll', function(){
		var winScroll = $(this).scrollTop();
		var winScrollPlus = winScroll + winHPart;
		var op = 0;
		infoBox.slideDown(1000);


		if(winScrollPlus >= infoBoxOffset ){
			// dl값을 각각 파악하여 매번 순환체크하도록 처리

					op = (winScrollPlus - h3Offset) / 400;
					infoBoxH3.css({opacity: op});
					infoBoxP.css({opacity: op})
				
			
	}
	});
				
				
			
})(jQuery);