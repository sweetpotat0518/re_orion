// orion_product_modal.js

// moreModal.js
var listData;
var colorArr = [];
var NowListLen;

(function($){
  var productBox = $('#productBox');
	var listUl   = productBox.find('ul');
	var moreBtn  = productBox.find('.more_btn');

	// listEl

	// console.log('before');
	i = 0; 
	
	// var InsertLi = function(db ,color){
  //   NowListLen = i + 20;
    
  //   for(; i<NowListLen; i++){		
  //     var imgUrl ='../img/orion_product/product/All/';
  //     productBoxUl_00.append( textEl(i) );
  //     productBoxUl_00.children('li').eq(i).find('.img').css({
  //                           backgroundImage:'url('+ imgUrl +product_all[i].img +')',
  //                           backgroundRepeat:'no-repeat',
  //                           backgroundPosition:'50% 50%',
  //                         });
  //                       }
		
	// 		if(i >= db.length){
  //       console.log(db.length);
	// 			moreBtn.hide();
	// 			// break;
	// 		}else{				
	// 			listUl.append(textEl(i));
	// 			listUl.find('li').eq(i).find('span').text(db[i].displayName);
	// 		}
	// };
	
	// $.ajax({
	// 	url:'../data/people2.json',
	// 	async:false,
	// 	success:function(data){
	// 		listData = data;
	// 		var dataLen = listData.length;
			// 더보기 버튼 클릭
			// InsertLi(listData, colorArr);
			// moreBtn.on('click', function(){
			// 	InsertLi(listData, colorArr);
			// });
		// }
	// });	

  
})(jQuery);