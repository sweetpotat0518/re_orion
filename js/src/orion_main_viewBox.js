// orion_main_viewBox.js

(function($){

	var viewBox = $('#viewBox');
	var viewBtn = $('.view_btn');
	var nextBtn = viewBtn.find('next');
	var indi = $('.indicator');
	var indiLi = indi.find('li');
	var indiLink = indiLi.children('a');
	var viewContainer  = $('.view_container');
	var viewUl = viewContainer.find('ul');
	var viewList = viewContainer.find('li');
	var timed    = 900;

	var indiNarr = $('.indi_narr');
	var indiNarrLi = indiNarr.find('li');


	var liLast = viewList.eq(-1).clone(true);
	viewUl.prepend(liLast);
	viewList = viewUl.find('li');
	var viewLiLen = viewList.length;
	// console.log(storeLiLen);
	var liWidth = 100 / viewLiLen;
	viewUl.css({'width':viewLiLen * 100 + '%', transform:'translateX(-'+ liWidth + '%)'});
	viewList.css({width:liWidth + '%'});
	// console.log(viewList);
	var i = 0;

	$('.sampleBtn').on('click', function(){
		i++;
		AdViewMv();
	});
	
	var AdViewMv = function(){
		var myPer = -i * 100;					
		// --------------
		viewUl.stop().animate({'marginLeft':myPer + '%'}, timed, function(){
			// 맨 오른쪽 광고에서 첫번째를 건너뛰게 하는 코드 !!!!!!!!!!!!
			if( i >= (viewLiLen -2) ){
				i = -1;
				viewUl.css({'marginLeft':100 + '%'})
			}
		});
		// --------------
		indiLi.removeClass('action');
		indiLi.eq(i).addClass('action');
		// --------------
		indiNarrLi.removeClass('action');
		indiNarrLi.eq(i).addClass('action');
	}
	// )};



	indiLink.on('focus', function(e){
		e.preventDefault();
		i = $(this).parent('li').index();
		AdViewMv(i);
	});
// ===============================================================

	indiNarrLi.on('click', function(e){
		e.preventDefault();
		i = $(this).index();
		AdViewMv();
	});

	var SetSlideInterval;
	var mySlideGo = function(){
		SetSlideInterval = setInterval(function(){
			i++;
		AdViewMv();
	}, timed*4 );
};

var myslideStop = function(){
	clearInterval(SetSlideInterval);
	};
	
	mySlideGo();
	
	viewBox.on({mouseenter:myslideStop, mouseleave:mySlideGo});

})(jQuery);