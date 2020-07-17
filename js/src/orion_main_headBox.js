// orion_main_headBox.js

(function($){


	var wrap = $('#wrap');
	var headBox = $('#headBox');
	var gnbArea = $('.gnb_area');
	var gnbDl  = gnbArea.find('dl');
	var gnbTitle = gnbArea.find('dt');
	var gnbTitleLink = gnbTitle.children('a');
	var gnbContent = gnbTitle.next('dd');
	var gnbConLink  = gnbContent.find('a');
	var timed = 300;
	

	gnbContent.hide();

	pcGnbMenu = function(){
	gnbTitleLink.on('mouseenter', function(e){
		e.preventDefault();

  	$(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp(timed);
  	$(this).parent('dt').next('dd').stop().slideDown(timed);
  	gnbTitle.removeClass('action');
		$(this).parent('dt').addClass('action');
		gnbTitle.addClass('white_box');
		unbTitle.addClass('white_box');
		headBox.removeClass('action');
		headBox.addClass('action');
	});

  gnbDl.on('mouseleave', function(e){
  	e.preventDefault();
  	gnbContent.stop().slideUp(timed);
		gnbTitle.removeClass('action');
		gnbTitle.removeClass('white_box');
		unbTitle.removeClass('white_box');
		gnbContent.find('li').removeClass('action');
		headBox.removeClass('action');
	});
	
  
  gnbConLink.on('focus', function(e){
  	e.preventDefault();
  	gnbTitle.removeClass('action');
  	$(this).parents('dd').prev('dt').addClass('action');
  	
  	gnbContent.find('li').removeClass('action');
  	$(this).parent('li').addClass('action');
	});
}

	// unb ----------------------------------------------------

	var unbBox = $('.unbBox');
	var unbArea = $('.unb_area');

	var unbDl  = unbArea.find('dl');
	var unbTitle = unbArea.find('dt');
	var unbTitleLink = unbTitle.children('a');
	var unbContent = unbTitle.next('dd');
	var unbConLink  = unbContent.find('a');
	var timed = 500;

	unbContent.hide();

	pcUnbMenu = function(){
	unbTitleLink.on('mouseenter', function(e){
		e.preventDefault();
  	$(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp(timed);
  	$(this).parent('dt').next('dd').stop().slideDown(timed);
		unbTitle.removeClass('action');
		gnbTitle.addClass('white_box');
		unbTitle.addClass('white_box');
		$(this).parent('dt').addClass('action');
		headBox.removeClass('action');
		headBox.addClass('action');
		menuBtnI.addClass('action');
	});

  unbDl.on('mouseleave', function(e){
  	e.preventDefault();
  	unbContent.stop().slideUp(timed);
		unbTitle.removeClass('action');
		gnbTitle.removeClass('white_box');
		unbTitle.removeClass('white_box');
		unbContent.find('li').removeClass('action');
		headBox.removeClass('action');
		menuBtnI.removeClass('action');
	});
	
  
  unbConLink.on('focus', function(e){
  	e.preventDefault();
  	unbTitle.removeClass('action');
  	$(this).parents('dd').prev('dt').addClass('action');
  	unbContent.find('li').removeClass('action');
  	$(this).parent('li').addClass('action');
	});
	}
	// 검색창----------------------------------------------------

	var unbBox = $('.unbBox');
	var search = unbArea.find('.search');
	var searchBox = unbArea.find('.searchBox');
	var buttonImg = search.find('i');
	

	search.on('mouseenter', function(e){
		e.preventDefault();
		gnbTitle.addClass('white_box');
		unbTitle.addClass('white_box');
		search.addClass('white_box');
		headBox.removeClass('action');
		headBox.addClass('action');
	});

	search.on('click', function(e){
		e.preventDefault();
		searchBox.addClass('action');
		buttonImg.css({'display':'none'});
		search.addClass('white_box');
		unbTitle.addClass('white_box');
		headBox.removeClass('action');
		headBox.addClass('action');
	});
	

	// headBox 숨김----------------------------------------
	
		// $(document).on('scroll', function(){
		// var docST = $(document).scrollTop();
		// // console.log(docST); // 스크롤의 위치 파악
		// 	if(docST === 0){
		// 		console.log(docST);
		// 		headBox.removeClass('action');
		// 	}else{
		// 		// headBox.removeClass('action');
		// 	}
		// });
		var menuBtn = headBox.find('button');
		var menuBtnI = menuBtn.find('i');
		var gnbBox = $('.gnbBox');

		
		pcMunuWhite = function(){
	var mouseOk = true;
	$(document).on('mousewheel DOMMouseScroll', function(e){
		if(mouseOk){
			mouseOk = false;
			var evt = e.originalEvent;
			var mouseResult;
			if(evt.wheelDelta){
				// mouseResult = 'wheelDelta가 존재한다';
				mouseResult = -evt.wheelDelta;
			}else{
				// mouseResult = 'wheelDelta가 없다';
				mouseResult = evt.detail*40;
			}
		}

		if(mouseResult <= 0){
			gnbTitle.addClass('white_box');
			unbTitle.addClass('white_box');
			headBox.addClass('action');
			menuBtnI.addClass('action');
			headBox.slideDown();
			headBox.on('mouseleave', function(e){
				e.preventDefault();
				  gnbTitle.addClass('action');
				  gnbTitle.addClass('white_box');
				  unbTitle.addClass('white_box');
					headBox.addClass('action');
					menuBtnI.addClass('action');
			  });
		}else if (mouseResult >= 0 ){
			headBox.slideUp();
			gnbBox.stop().animate({left:'-40%'}, 1000);
			var hT =  headBox.offset().top;
  
		}
		mouseOk =  true;
	});

}
// ===============================================
mobileMenu = function(){
	var menuBtn = headBox.find('button');
	var menuBtnI = menuBtn.find('i');
	var gnbBox = $('.gnbBox');
	

	menuBtn.on('mouseenter', function(e){
		e.preventDefault();
		headBox.removeClass('action');
		headBox.addClass('action');
		gnbTitle.addClass('white_box');
		unbTitle.addClass('white_box');
		menuBtnI.addClass('action');
	});

	menuBtn.on('mouseleave', function(e){
		e.preventDefault();
		headBox.removeClass('action');
		gnbTitle.removeClass('white_box');
		unbTitle.removeClass('white_box');
		menuBtnI.removeClass('action');
	});
	
	
	menuBtn.on('click', function(e){
		e.preventDefault();
		gnbBox.stop().animate({left:0}, 1000);
		// -----------------------------
		gnbTitleLink.on('click', function(e){
			e.preventDefault();
	
			$(this).parentsUntil('ul').siblings('li').find('dd').stop().slideUp(timed);
			$(this).parent('dt').next('dd').stop().slideDown(timed);
			gnbTitle.removeClass('action');
			$(this).parent('dt').addClass('action');
			// gnbTitle.addClass('white_box');
			// unbTitle.addClass('white_box');
			menuBtn.addClass('action');
			headBox.removeClass('action');
			headBox.addClass('action');
		});
	
		gnbBox.on('mouseleave', function(e){
			e.preventDefault();
			gnbContent.stop().slideUp(timed);
			gnbTitle.removeClass('action');
			// gnbTitle.removeClass('white_box');
			// unbTitle.removeClass('white_box');
			gnbContent.find('li').removeClass('action');
			headBox.removeClass('action');
			gnbBox.animate({left:'-40%'}, 1000);
		});
		
		
		gnbConLink.on('focus', function(e){
			e.preventDefault();
			gnbTitle.removeClass('action');
			$(this).parents('dd').prev('dt').addClass('action');
			
			gnbContent.find('li').removeClass('action');
			$(this).parent('li').addClass('action');
		});
	});

	// gnbBox.on('mouseleave', function(e){
	// 	e.preventDefault();
	// 	gnbBox.animate({left:'-100%'}, 1000);
	// });
}






// =================================================
	var win = $(window);
var headBox = $('#headBox');
var gnbBox = $('#gnb');
var gnbMenu = $('#gnbBox');
var gnbBtn = gnbMenu.find('.gnb_view_btn');
var gnbList = gnbMenu.find('.gnb_list');

// 다비아스 환경
var winW = win.width(); // 갖춰진 사이즈 확인


	// 디바이스 사이즈 체크
// 위에서 변수처리를 하고 간단하게 if문으로 변수이름을 적어서 기능을 수행하게 한다.
if(winW <= 640){ // 모바일 환경
	mobileMenu();
	pcUnbMenu();
	pcMunuWhite();
}else if(winW < 1024){ // 모바일2 환경
	mobileMenu();
	pcUnbMenu();
	pcMunuWhite();
}else if(winW <= 1440){ // 태블릿 환경
	pcGnbMenu();
	pcUnbMenu();
	pcMunuWhite();
}else if(winW <= 1920){ // pc 환경
	pcGnbMenu();
	pcUnbMenu();
	pcMunuWhite();
}else{
	pcGnbMenu();
	pcUnbMenu();
	pcMunuWhite();
}


// ---------------------------------------------------
// 모바일에서 메뉴가 나오고 크기를 늘리면 태블릿 기준에서 메뉴가 사라진다.
// 그래서 새로고침을 해서 늘어난 크기에서도 메뉴가 나올수 있게 해야한다.

win.on('resize', function(){
	var nowWinW = win.width(); // 변경된 사이즈 확인
	var deviceWidthCheck = winW !== nowWinW; // 기존 가로값과, 지금의 가로값이 변경되었다면
	if(deviceWidthCheck){ // 참이냐, 거짓이냐를 따지고
		location.reload(); // 참이면 새로고침을 해라
		// window.location
	}
});
	
	

})(jQuery);