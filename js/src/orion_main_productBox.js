// orion_main_productBox.js

(function($){

	// ------------------------------------------------------

	
	var product02 = $('.product_02');
	// var indi = $('.indicator');
	// var indiLi = indi.find('li');
	// var indiLink = indiLi.children('a');
	var productContainer = $('.product_container');
	var product2Container = $('.product2_container');
	var pdContainerBtn = productContainer.find('button');
	var pd2ContainerBtn = product2Container.find('button');
	var nextBtn = productContainer.find('.next');
	var nextBtn2 = product2Container.find('.next');
	var prevBtn = productContainer.find('.prev');
	var pdContainerUl = productContainer.find('ul');
	var pd2ContainerUl = product2Container.find('ul');
	var productList = productContainer.find('li');
	var product2List = product2Container.find('li');
	var timed  = 700;
	var matFirstSize = productList.eq(1).outerWidth(true);
	var matFirstSize2 = product2List.eq(1).outerWidth(true);
	// console.log(matFirstSize);
	var mvLength = 1;

	pdContainerBtn.css({top:0, zIndex:500})
	var thisOk = true;
	// console.log( nextBtn );
	pdContainerUl.css({transform:'translate(' + -matFirstSize + 'px)'});

	pd2ContainerBtn.css({top:0, zIndex:500})
	var thisOk2 = true;
	// console.log( nextBtn2 );
	pd2ContainerUl.css({transform:'translate(' + -matFirstSize2 + 'px)'});


	// ----------------------------------------------------------------------

	
	var n = 1;

	$('.n_count').text( n );
	$('.t_count').text( productList.length );
	
	pdContainerBtn.on('click', function(e){
		e.preventDefault();
		
		var thisIt = $(this)[0];
		
		var nextB = nextBtn[0];
		
		var pdLiLength = productList.length;
		
	if(thisIt === nextB && thisOk){
		thisOk = false;
		n += 1;
		pdContainerUl.animate({marginLeft: -matFirstSize + 'px'}, function(){
			if(n>pdLiLength-1){
				n = 0;
			}

			productList.eq(mvLength).prevAll('li').appendTo(pdContainerUl);
			pdContainerUl.css({marginLeft:0});
			productList   = pdContainerUl.find('li');
			thisOk = true;
		}
		);
	}else if(thisOk){
		thisOk = false;
		n -= 1;
		pdContainerUl.animate({marginLeft:matFirstSize + 'px'}, function(){
			if(n<=1){
				n=pdLiLength+1;
			}
			productList.eq((mvLength * -1) -1).nextAll().prependTo(pdContainerUl);
			pdContainerUl.css({marginLeft:0});
			productList   = pdContainerUl.find('li');
			// $('.n_count').text( pdLiLength-=1 );
			thisOk= true;
		});
	}
	$('.n_count').text(n);
	

});

var SetSlideInterval;
	var mySlideGo = function(){
		SetSlideInterval = setInterval(function(){
		// i+=1;
		// if(i >= productList.length){ i = 0	}	

		nextBtn.trigger('click');
	}, timed*4 );
	
};

var myslideStop = function(){
	clearInterval(SetSlideInterval);
	};
	
	mySlideGo();
	
	productList.on({mouseenter:myslideStop, mouseleave:mySlideGo});


// ------------------------------------------------------------

	
	
	

	// ---------------------------------------------------------------
	var j = 1;

	$('.n_count2').text( j );
	$('.t_count2').text( product2List.length );
	
	
	
	pd2ContainerBtn.on('click', function(e){
		e.preventDefault();
		
		var thisIt2 = $(this)[0];
		
		var nextB2 = nextBtn2[0];

		var pd2LiLength = product2List.length;
		
	if(thisIt2 === nextB2 && thisOk2){
		thisOk2 = false;
		j+=1;
		pd2ContainerUl.stop().animate({marginLeft: -matFirstSize2 + 'px'}, function(){
			if(j>pd2LiLength-1){
				j = 0;
			}

			product2List.eq(mvLength).prevAll('li').appendTo(pd2ContainerUl);
			pd2ContainerUl.css({marginLeft:0});
			product2List   = pd2ContainerUl.find('li');
			thisOk2 = true;
		}
		);
	}else if(thisOk2){
		thisOk2 = false;
		j-=1;
		pd2ContainerUl.stop().animate({marginLeft:matFirstSize2 + 'px'}, function(){
			if(j<=1){
				j=pd2LiLength+1;
			}
			
			product2List.eq((mvLength * -1) -1).nextAll().prependTo(pd2ContainerUl);
			pd2ContainerUl.css({marginLeft:0});
			product2List   = pd2ContainerUl.find('li');
			thisOk2 = true;
		});
	}
	$('.n_count2').text(j);
});


var SetSlideInterval2;
	var mySlideGo2 = function(){
		SetSlideInterval2 = setInterval(function(){

		nextBtn2.trigger('click');
	}, timed*4 );
};

var myslideStop2 = function(){
	clearInterval(SetSlideInterval2);
	};
	
	mySlideGo2();
	
	product2List.on({mouseenter:myslideStop2, mouseleave:mySlideGo2});

	


})(jQuery);