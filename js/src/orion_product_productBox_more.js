// orion_product_productBox_more.js

(function($){
  
var producAll = $('.product_all');
var moreBtn = $('.more_btn').find('button');

var i=0;
var person;
var firstView = 20;
var myView = 8;
var maxN = product_all.length;   // data.length; // 보여주고싶은갯수를 설정


var loadData = function(prLen){
  // console.log(prLen);
  var k = prLen || myView;
  // var i=0;
  // if(prLen){k=prLen}else{k = myView}
  // for(; i<product_all.length; i++){	
    //   var imgUrl ='../img/orion_product/product/All/';
    //   productBoxUl_00.append( textEl(i) );
    //   productBoxUl_00.children('li').eq(i).find('.img').css({
      //                               backgroundImage:'url('+ imgUrl +product_all[i].img +')',
      //                               backgroundRepeat:'no-repeat',
      //                               backgroundPosition:'50% 50%',
      //                             })
      
      var j = i + k;
      if(j>product_all.length){j = product_all.length; }
      console.log(i, k)
      for(; i<j; i++){			
        var imgUrl ='../img/orion_product/product/All/';
        productBoxUl_00.append( textEl(i) );
        productBoxUl_00.children('li').eq(i).find('.img').css({
                              backgroundImage:'url('+ imgUrl +product_all[i].img +')',
                              backgroundRepeat:'no-repeat',
                              backgroundPosition:'50% 50%',
                            });
                          }
                          
      if(i >= maxN){moreBtn.hide()}
      // ModalLink();
// ---------------------------------------------
    // imgZoom();
    ModalLink();
//------------------------------------------------
  };// loadData(n);
  loadData(firstView);
  
  moreBtn.on('click',function(e){
    // 버튼을 눌렀을때 보이는 값
    e.preventDefault();
    e.bubbles = false;
    loadData();
    imgZoom();
    // ModalLink();
    // console.log($('.product_all').find('li'));
    //   $(this).css({color:'#red'});
    //   $(this).css({backgroundSize:'60%', transition:'all 500ms ease'});
    // });

  });

	
	
})(jQuery);