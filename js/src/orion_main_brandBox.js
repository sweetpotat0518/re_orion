// orion_main_brandBox.js

(function($){
	
	var brandBox = $('#brandBox');
	var brandIndi = $('.brand_indicator');
  var indiLi = brandIndi.find('li');
  var indiLink = indiLi.children('a');
	var brandContainer = $('.brand_container');
	var bContainerBtn = brandBox.find('button');
	var brandBtn = $('.brand_btn');
	var nextBtn = brandBtn.find('.next');
	var bContainerUl = brandContainer.find('ul');
	var brandList = brandContainer.find('li');
	var timed  = 1000;
	var matFirstSize = brandList.eq(1).outerWidth(true);
	var mvLength = 1;

	brandBtn.css({top:'50%', zIndex:500})
	var thisOk = true;
	// console.log( nextBtn );
	bContainerUl.css({transform:'translate(' + -matFirstSize + 'px)'});



	
	brandBtn.find('button').on('click', function(e){
		e.preventDefault();
		
		var thisIt = $(this)[0];
		
		var nextB = nextBtn[0];
		
		// console.log(thisIt);
	if(thisIt !== nextB && thisOk){
		thisOk = false;
		bContainerUl.animate({marginLeft: matFirstSize + 'px'}, function(){
			brandList.eq((mvLength * -1) -1).nextAll().prependTo(bContainerUl);
			bContainerUl.css({marginLeft:0});
			brandList   = bContainerUl.find('li');
			thisOk = true;
		});
	}else if(thisOk){
		thisOk = false;
		bContainerUl.animate({marginLeft: -matFirstSize + 'px'}, function(){
			brandList.eq(mvLength).prevAll('li').appendTo(bContainerUl);
			bContainerUl.css({marginLeft:0});
			brandList   = bContainerUl.find('li');
			thisOk= true;
		});
	}

});



var SetSlideInterval;
	var mySlideGo = function(){
		SetSlideInterval = setInterval(function(){
		// i+=1;
		// if(i >= brandList.length){ i = 0	}	

		nextBtn.trigger('click');
	}, timed*4 );
	
};

var myslideStop = function(){
	clearInterval(SetSlideInterval);
	};
	
	// mySlideGo();
	
	brandList.on({mouseenter:myslideStop, mouseleave:mySlideGo});

	
	// 인디케이터 ---------------------------------
	
	indiLink.on('click', function(e){
		e.preventDefault();
		indiLink.addClass('action');
	});


	
	
	
	
})(jQuery);