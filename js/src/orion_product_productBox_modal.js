// orion_product_productBox_modal.js

// (function($){
var ModalLink = function(){
  
  // start
  var productBox = $(document).find('#productBox');
  var productList = productBox.find('.product');
  var productBoxLi = productList.children('li');    

var modalList = product_all;

var bigModalText = '<div class="big_modal">\
          <div class="big_img">\
          <div class="me_img"></div>\
            <div class="me_info"></div>\
            <div class="close_btn"><button type="button"><span class="hidden">닫기</span></button></div>\
          </div>\
          <div class="big_bg"></div></div>';

productBox.append(bigModalText);
var bigModal = productBox.children('.big_modal');
var bigModalBtn = bigModal.find('.close_btn');
var bigImgBox = bigModal.find('.big_img');
var bigBg = bigModal.find('.big_bg');
var meImg = bigModal.find('.me_img');
var menuInfo = bigModal.find('.me_info');

var bigUrl = '../img/orion_product/product/All/';

var mainMenu = $('.main_menu');
var mainMenuLi = mainMenu.find('li');
var mainMenuLiP = mainMenuLi.find('li').find('p');


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

// mainMenuLi.find('a').on('mouseenter',function(e){
//   e.preventDefault();
//   mainMenuLiP.addClass('action');
// });

mainMenuLi.find('a').on('click',function(e){
  e.preventDefault();
  mainMenuLiIndex = $(this).parent('li').index();
  // modalList = 'newList_0'+(subMenuLiIndex+1);
  modalList = Fnmodal(mainMenuLiIndex);
  // console.log(modalList);
});

mainMenuLi.find('a').on('focus',function(e){
  e.preventDefault();
  mainMenuLiIndex = $(this).parent('li').index();
  // modalList = 'newList_0'+(subMenuLiIndex+1);
  modalList = Fnmodal(mainMenuLiIndex);
  // console.log(modalList);
});

var menuInfoText = '<p class="title_p">title</p><br/><p>content</p><br/><p clas="imgnarr"></p>';
menuInfo.append(menuInfoText);
menuInfo.css({backgroundImage: 'linear-gradient(-90deg, #D81425, #fff)'});
menuInfo = bigModal.find('.me_info');
menuInfoTitle = menuInfo.find('p').eq(0);
// menuInfoPrice = menuInfo.find('p').eq(1);
menuInfoContent = menuInfo.find('p').eq(1);
menuInfoEX = menuInfo.find('p').eq(2);

var bubbleFalse = true;
var menuTextChange = function(listN){
  bubbleFalse = false;
  menuInfoTitle.text(modalList[listN].title).css({fontWeight:'bold'});
  menuInfoContent.text(modalList[listN].content)
  menuInfoEX.html(modalList[listN].imgNarr).css({textAlign:'left'});
  meImg.css({backgroundImage:'url('+bigUrl+modalList[listN].pcImg+')'});
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
  meImg.css({backgroundImage:'url('+bigUrl+modalList[itIndex].pcImg+')',
  backgroundSize:'contain',backgroundPosition:'50% 50%',backgroundRepeat:'no-repeat'});
  
  bigModal.fadeIn(function(){
    $(window).on('keyup',function(evt){
      evt.preventDefault();

      if(bubbleFalse){
        bubbleFalse = false;
        evt.bubbles = false;
        var keyCode = evt.keyCode;
        console.log(keyCode);

        // 왼37, 오른39, 빠져나가기27
        if(keyCode ===37){
          n-=1;
          if(n<0){n=modalList.length-1;}
          // meImg.css({backgroundImage:'url('+bigUrl+modalList[n].pcImg+')'});
          menuTextChange(n);
        }else if(keyCode ===39){
          n+=1;
          if(n>modalList.length-1){n=0;}
          // meImg.css({backgroundImage:'url('+bigUrl+modalList[n].pcImg+')'});
          menuTextChange(n);
        }else if(keyCode ===27){
          bigModal.fadeOut(400,function(){
            // productBoxLi.eq(0).find('a').focus();
          });
        }
      }
    });
  });
});


bigModalBtn.on('click',function(e){
  e.preventDefault();
  bigModal.fadeOut();
});
bigBg.on('click',function(){
  bigModal.fadeOut();
});


  // --------------------------------------



};

// ModalLink();

// })(jQuery);