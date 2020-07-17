// orion_producr_popupModal.js
// 비동기

(function($){

  var productBox  = $('#productBox');
  var listUl    = productBox.find('ul');
  var productBoxLi = listUl.find('li'); 
  
  var bigModalText = '<div class="big_modal">\
  <div class="big_img">\
  <div class="me_info"></div>\
  <div class="me_img"></div>\
  <div class="close_btn"><button type="button"><span class="hidden">닫기</span></button></div>\
  </div>\
  <div class="big_bg"></div></div>';
  
  productBox.append(bigModalText);
  
  var modalWin  = $('.big_modal');
  var modalView = modalWin.find('.big_img');
  var modalImg  = modalWin.find('.me_img');
  var modalinfo = modalWin.find('.me_info');
  var modalCloseBtn = modalWin.find('.close_btn');
  var imgUrl ='../img/orion_product/product/All/';
  
  
  // 비동기처리로 인해 새로생겨나는 형태는 기존의 변수나 선택자에 담기지 않는다.
  // 이를 해결하기 위한 방법으로는, 
  // 첫번째 : $(document) 에서부터 찾아서 선택하는 형식을 취하면 된다.
  // 두번째 : 최종선택자는 클릭후에 판단하는 형식으로 취한다.
  
  /*
  var cardI;
  $(document).find(productBoxUl_00).on('click', 'li', function(e){
    e.preventDefault();
    var indexCard = $(this).index();
    console.log('!!!!!!!!!!!');
    cardI = indexCard;
  
    modalImg.css({
      backgroundImage:'url('+ imgUrl +product_all[i].img +')',
      backgroundSize:'cover',
      backgroudRepeat:'no-repeat',
      backgroundPosition:'50% 50%'
    });
    var menuInfoText = '<p>title</p><br/><p>content</p><br/><p></p>';
      modalinfo.append(menuInfoText);
      modalinfo.css({backgroundImage: 'linear-gradient(-90deg, #D81425, #fff)'});
      modalinfo = modalWin.find('.me_info');
      menuInfoTitle = modalinfo.find('p').eq(0);
      // menuInfoPrice = menuInfo.find('p').eq(1);
      menuInfoContent = modalinfo.find('p').eq(1);
      menuInfoEX = modalinfo.find('p').eq(2);
    
    var bubbleFalse = true;
    var menuTextChange = function(listN){
      bubbleFalse = false;
      menuInfoTitle.text(modalList[listN].title).css({fontSize:'2rem', fontWeight:'bold'});
      menuInfoContent.text(modalList[listN].content).css({fontSize:'1rem'});
      menuInfoEX.html(modalList[listN].imgNarr).css({padding:'8% 10%', textAlign:'left', fontSize:'0.7rem'});
      meImg.css({backgroundImage:'url('+bigUrl+modalList[listN].pcImg+')'});
      bubbleFalse = true;
    }
  });
   */



  //  =================================================================

  var mainMenu = $('.main_menu');
  var mainMenuLi = mainMenu.find('li');
  
  var mainMenuLiIndex = 0;
  
  // console.log(modalList);
  
  var Fnmodal = function(mainMenuLiIndex){
    if(mainMenuLiIndex==0){
      // console.log('subMenu : '+(mainMenuLiIndex+1));
      return product_all;
    }else if(mainMenuLiIndex==1){
      // console.log('subMenu : '+2);
      return product_pie;
    }else if(mainMenuLiIndex==2){
      // console.log('subMenu : '+3);
      return product_snack;
    }else if(mainMenuLiIndex==3){
      // console.log('subMenu : '+4);
      return product_biscuit;
    }else if(mainMenuLiIndex==4){
      // console.log('subMenu : '+5);
      return product_gum;
    }else if(mainMenuLiIndex==5){
      // console.log('subMenu : '+6);
      return product_candy;
    }else if(mainMenuLiIndex==6){
      // console.log('subMenu : '+7);
      return product_chocolate;
    }
  }
  

  var cardI;
  $(document).find('ul').on('click', 'li', function(e){
    e.preventDefault();
    var indexCard = $(this).index();
    console.log(modalImg);
    cardI = indexCard;
    modalList = Fnmodal(mainMenuLiIndex);
    mainMenuLiIndex = $(this).parent('li').index();
  }); 
  // mainMenuLi.find('a').on('click',function(e){
  //   e.preventDefault();
  //   mainMenuLiIndex = $(this).parent('li').index();
  //   // modalList = 'newList_0'+(subMenuLiIndex+1);
  //   modalList = Fnmodal(mainMenuLiIndex);
  //   // console.log(modalList);
  // });
  
  mainMenuLi.find('a').on('focus',function(e){
    e.preventDefault();
    mainMenuLiIndex = $(this).parent('li').index();
    // modalList = 'newList_0'+(subMenuLiIndex+1);
    modalList = Fnmodal(mainMenuLiIndex);
    // console.log(modalList);
  });
  
  var menuInfoText = '<p>title</p><br/><p>content</p><br/><p></p>';
  modalinfo.append(menuInfoText);
  modalinfo.css({backgroundImage: 'linear-gradient(-90deg, #D81425, #fff)'});
  modalinfo = modalWin.find('.me_info');
  menuInfoTitle = modalinfo.find('p').eq(0);
  // menuInfoPrice = menuInfo.find('p').eq(1);
  menuInfoContent = modalinfo.find('p').eq(1);
  menuInfoEX = modalinfo.find('p').eq(2);
  
  var bubbleFalse = true;
  var menuTextChange = function(listN){
    bubbleFalse = false;
    menuInfoTitle.text(modalList[listN].title).css({fontSize:'2rem', fontWeight:'bold'});
    menuInfoContent.text(modalList[listN].content).css({fontSize:'1rem'});
    menuInfoEX.html(modalList[listN].imgNarr).css({padding:'8% 10%', textAlign:'left', fontSize:'0.7rem'});
    modalImg.css({backgroundImage:'url('+imgUrl+modalList[listN].pcImg+')'});
    bubbleFalse = true;
  }
  
  // console.log(productBoxLi.find('a'));
  productBoxLi.find('a').on('click',function(e){
    e.preventDefault();
    e.bubbles = false;
    
    var itIndex = $(this).parent('li').index();
    var n = itIndex;
    // console.log(n);
    
    menuTextChange(itIndex);
    modalImg.css({backgroundImage:'url('+imgUrl+modalList[itIndex].pcImg+')',
    backgroundSize:'contain',backgroundPosition:'50% 50%',backgroundRepeat:'no-repeat'});
  
  // 마우스 움직일경우 
  modalView.on('mousemove', function(e){
    var mouseP = { x: e.clientX, y: e.clientY };
    // console.log(mouseP);
    modalView.css({ transform:'rotateX('+ -mouseP.x / 100 * 2 + 'deg) \
                                translate('+ mouseP.y / 100 * 10+ 'px) \
                               perspective(500px)'	});
  });
});
  
  // 키보드 처리로인한 이미지변경
    // keyboard 이벤트
      $(document).on('keyup', function(e){
        var key = e.key;
        var keycase = key.toLowerCase();		
          switch(keycase){
            case 'arrowup':
            case 'arrowleft':
              cardI -= 1;
            break;
            
            case 'arrowdown':
            case 'arrowright':
              cardI += 1;
            break;
  
            case 'escape':
              modalWin.fadeOut();
              listUl.find('li').eq(indexCard).find('a').focus();
            break;
          }
          // console.log(cardI);
          if(cardI <= 0){	cardI = 0;
          }else if(cardI >= maxN){cardI = maxN;	modalWin.fadeOut();
          }else{modalImg.css({backgroundImage:'url('+ imgUrl +product_all[i].img +')'});
          }
      });// $(document).on('keyup'
  
  // 닫기버튼
  modalCloseBtn.on('click', function(e){
    e.preventDefault();
    modalWin.fadeOut(100);
  });
  
  })(jQuery);