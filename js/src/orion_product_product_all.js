var product_all;

product_all = [
  {img:'images1.jpg',pcImg:'pie_01-1.jpg', imgNarr:'말하지 않아도 알아요~ 눈빛만 보아도 알아요~ <br />\
  1974년 출시한, 오리온의 영혼이 담긴 제품, 초코파이情 <br />\  세계 60여개국에 수출되며 세계인의 입맛을 사로잡은 초코파이情이 <br />\
  10% 커지고 더욱 맛있어 졌습니다. <br />\  <br />\  <br />\  <br />\  [더 커진만큼 더욱 맛있어진 오리온 초코파이情] <br />\
    - 13%더 늘어난 초콜릿 <br />\
    - 지방 0%의 쫀득한 마쉬멜로우 <br />\
    - 촉촉하고 부드러운 식감', title:'오리온 초코파이 情', content:'새로운 시작, 오리온 초코파이情'},
  {img:'pie_02.jpg',pcImg:'pie_02-1.jpg', imgNarr:'바나나생크림이 들어있어 부드러워요~ <br />\ <br />\  - 마쉬멜로우 속 바나나생크림을 넣어 부드럽고 자연스러운 바나나 풍미 <br />\ <br />\
  - 계란을 넣어 부드럽고 폭신한 빵 식감', title:'바나나 초코파이情', content:'초코파이와 바나나의 부드러운 만남'},
  {img:'pie_03.jpg',pcImg:'pie_03-1.jpg', imgNarr:'초코파이情이 처음 시도하는 새로운 식감 <br />\  빵속에 떡을 넣어 쫀득한 찰 초코파이 <br />\
  <br />\  <br />\  1974년에 출시하여 오랜 사랑을 받아온 초코파이가 <br />\  빵속에 떡을 넣어 쫀득한 식감으로 돌아왔습니다. <br />\
  <br />\  <br />\  [ 찰초코파이 인절미 ] <br />\  - 인절미 스프레드에서 느껴지는 고소함과 달콤함 <br />\  - 맛도 외관도 풍부한 인절미맛  <br />\
  <br />\  <br />\  [ 찰초코파이 흑임자 ] <br />\  - 빵속에 흑임자 가득 <br />\
  - 흑임자 스프레드에서 느껴지는 풍부한 흑임자 풍미', title:'찰초코파이情', content:'빵속에 떡을 넣어 쫀득한 찰 초코파이'},
  {img:'pie_04.png',pcImg:'pie_04-1.jpg', imgNarr:'부드러운 케이크 속에 과육과 크림이 어우러진 후레쉬베리 <br />\  달콤상큼한 후레쉬베리로 감성충전하세요. <br />\
  <br />\  1) 후레쉬베리 오리지널 <br />\  25년간 후레쉬베리를 대표한 맛 <br />\  과일잼의 대명사 딸기와 향긋한 산딸기로 <br />\
  산뜻하게 달콤한 후레쉬베리 오리지널(산딸기와 딸기잼 14.4%, 크렌베리잼 1.6%) <br />\  <br />\  <br />\  2) 후레쉬베리 복숭아 <br />\
  후레쉬베리의 새로운 맛 <br />\  상큼한 요거트 크림과 달콤한 복숭아의 만남! <br />\
  달콤한 복숭아 잼 속 말캉말캉 씹히는 복숭아 과육! (복숭아 잼 13%)', title:'후레쉬베리', content:'부드러운 케이크 속에 과육과 크림이 어우러진'},
  {img:'pie_05.gif',pcImg:'pie_05-1.jpg', imgNarr:'1. 제대로 구워 부드럽고 찰진 식감의 촉촉한 붕어빵 케익 <br />\ <br />\  2. 100% 국내산 찹쌀떡과 단팥 초콜릿크림이 들어 있어 <br />\
      쫀득쫀득하고 깔끔한 맛', title:'참붕어빵', content:'쫀득쫀득하고 깔끔한 맛'},
  {img:'pie_06.png',pcImg:'pie_06-1.jpeg', imgNarr:'-가성비를 보고 고르세요~!  <br />\ <br />\  -계란을 듬뿍 넣어 촉촉하고 부드러운 맛 <br />\ <br />\
  -국내 생산으로 더 맛있고 신선하게!', title:'카스타드', content:'요란을 듬뿍 넣어 촉촉하고 부드러운 맛'},
  {img:'pie_07.png',pcImg:'pie_07-2.png', imgNarr:'* 불어로 상류층의 고급스러운 이라는 뜻의 오뜨(Haute)는 <br />\  달지 않으면서도 부드럽고 촉촉한 식감이 조화로운 베이커리 <br />\
  스타일의 프리미엄 조각케익입니다. <br />\  <br />\  <br />\ * 가늘고 긴 모양의 조각케익으로 간편하게 휴대하고 <br />\  부스러기 없이 깔끔하게 즐길 수 있습니다. <br />\
  <br />\  <br />\ 1) 오뜨 쇼콜라 (Chocolat) <br />\  - 카카오빈으로 만든 카카오매스를 사용하여 더욱 풍부하고 진한 <br />\
    초콜릿 케익의 풍미를 느낄 수 있습니다. <br />\    <br />\    <br />\ 2) 오뜨 치즈 (Cheese) <br />\  - 고소하고 달콤한 덴마크산  까망베르 치즈를 사용하여 <br />\
    더욱 풍부하고 진한 치즈케익의 풍미를 느낄 수 있습니다.', title:'케익오뜨', content:'차 마실 땐 진한 디저트 케익'},
  {img:'pie_08.png',pcImg:'pie_08-1.jpg', imgNarr:'-1.5배 더 커진 생크림파이 (기존 생크림파이 대비)  <br />\ <br />\  -진하고 풍부한 초콜릿 맛(카카오 가공품6.5%) <br />\ <br />\ <br />\
  *우유, 커피와 함께 생크림의 꽉 찬 부드러움을 즐겨보세요!', title:'생크림파이1.5', content:'진하고 풍부한 초콜릿맛'},

  
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------

  
  {img:'snack_01.jpg',pcImg:'snack_01-1.jpg', imgNarr:'작고 귀여워진 별 모양의 미니별! <br />\ <br />\  더욱 바삭해지고 경쾌해진 식감의 미니별! <br />\ <br />\
  취향대로 골라 먹는 달콤고소한 버터구이 오징어맛과 단짠단짠 해물볶음 양념맛!', title:'오!감자 미니별', content:'와작와작 미니별이 와르르~'},
  {img:'snack_02.png',pcImg:'snack_02-2.jpg', imgNarr:'갓 수확한 알감자와 똑 닮은! <br />\ <br />\  감자 안에 또 감자! 이중구조로 두 번 바삭! <br />\ <br />\
  휴게소 버터구이 알감자의 은은한 버터 향이 솔솔~', title:'감자속감자', content:'구운 감자 속 감자튀김이 쏙'},
  {img:'snack_03.png',pcImg:'snack_03-1.jpg', imgNarr:'한입에 쏙! 깔끔하게 즐기는 나쵸의 바삭함! <br />\ <br />\  고소한 옥수수에 찰떡인 두가지 맛!<br />\
  - 크림어니언맛 : 달콤한 양파에 부드러운 크림을 더한 크림어니언맛 <br />\
  - 칠리지즈맛 : 치즈 풍미에 매콤한 칠리를 더해 중독성 강한 칠리치즈맛', title:'도도한 미니미 나쵸', content:'한입에 쏙! 깔끔하게 즐기는 나쵸의 바삭함!'},
  {img:'snack_04.png',pcImg:'snack_04-1.png', imgNarr:'- 구운쌀칩은 36시간 숙성된 쌀반죽을 화덕에 직접 구워낸 고소하고 바삭한 쌀과자 입니다. <br />\ <br />\
  - SKU: 구운쌀칩 달콤한맛 151g / 해물맛 111g', title:'구운쌀칩', content:'덕에 구워 바삭한'},
  {img:'snack_05.png',pcImg:'snack_05-1.jpg', imgNarr:'와작와작 바삭한 식감과 리얼한 치킨맛으로 신나게 POP! <br />\
  한 입사이즈 크기와 한 손에 쥐고 털어먹기 좋은 기다란 포장! <br />\ <br />\  - 닭강정맛 : 매콤달콤한 맛과 바삭한 식감까지 닭강정맛 그대로! <br />\
  - 치즈뿌린 치킨팝 : 치즈가루 솔솔 뿌려 마법의 단짠 ! 바삭한 빵가루로 리얼 치킨 식감까지!', title:'치킨팝', content:'와작와작 바삭한 식감과 리얼한 치킨맛'},
  {img:'snack_06.png',pcImg:'snack_06-1.png', imgNarr:'국내 제과시장에서 처음으로 선보이는 "네 겹 스낵"으로 <br />\  1개를 먹어도 3-4개를 먹는 듯한 풍부하고 바삭한 식감이 일품입니다. <br />\ <br />\
  거북이 등껍질 모양을 형상화한 재미있는 스낵인 꼬북칩은 <br />\  진하고 달콤한 "콘스프맛"과 향긋한 시나몬 풍미가 매력적인 "스윗시나몬맛" <br />\
  달콤고소 콩가루 듬뿍! 달콩인절미맛 총 3종이 있습니다.', title:'꼬북칩', content:'4겹층층구조 신개념 스낵, 오리온 꼬북칩'},
  {img:'snack_07.png',pcImg:'snack_07-1.jpg', imgNarr:'한국인이 사랑하는 식재료로 만든 맛있는 포카칩 2종 <br />\
  한국인의 맛 ! 구운마늘맛 & 땡초간장소스맛 <br />\  <br />\  <br />\
  한국인이라면 누구에게나 친숙한 식재료인 "마늘,고추"를 활용, <br />\  신선한 100% 생감자와 어울리는 맛으로 새롭게 재해석한 제품입니다. <br />\
  한식 매니아라면 특히 더욱 좋아할 수 밖에 없는 마성의 감자칩 <br />\  <br />\  <br />\  - 국내산 마늘 100% 사용, 고소한 마늘풍미 가득! 구운마늘맛 <br />\
  - 국내산 청양고추 100% 사용, 매콤달콤 알싸한 땡초간장소스맛', title:'포카칩 구운마늘,땡초간장', content:'한국인이라면 누구에게나 친숙한 식재료인 마늘 고추를 활용'},
  {img:'snack_08.jpg',pcImg:'snack_08-1.jpg', imgNarr:'"도도함이 묻어나야, 진짜 나쵸다!" <br />\  오리온 도도한나쵸가 정통 나쵸입니다.  <br />\
  <br />\  <br />\  [통옥수수 그대로! 고소함도 그대로!] <br />\   - 통옥수수를 곱게 갈아 만들어 더욱 고소합니다 <br />\
   - 오븐에 한번 굽고, 바로 튀겨 더욱 바삭합니다 <br />\   <br />\   <br />\  [다양한 맛으로 즐기는 정통 나쵸] <br />\   - 나쵸와 환상궁합! 치즈 디핑소스의 풍부한 맛을 그대로 느껴보세요 <br />\
   - 정통 나쵸라면 빠질 수 없는 치명적인 살사소스의 매력에 푹 빠져보세요', title:'도도한 나쵸', content:'도도함이 묻어나야, 진짜 나쵸다!'},
  {img:'snack_09.png',pcImg:'snack_09-1.jpg', imgNarr:'태양의 맛! 썬 <br />\  더욱 강렬하게 돌아온 태양의 맛! 썬 <br />\  <br />\  <br />\
  - 통옥수수, 통밀, 쌀, 귀리 등 태양이 키워낸 통곡물의 고소함! <br />\ <br />\  - 썬 만의 독특한 굴곡 모양으로 식감은 더욱 바삭! 기분까지 경쾌하게! <br />\ <br />\  - 핫스파이시: 매콤짭짤 중독적인 맛으로 완성되는 강렬한 태양의 맛! <br />\ <br />\
  - 갈릭바게트: 갈릭바게트의 향긋하고 달콤한 맛과 바삭한 식감 그대로!', title:'썬칩', content:'더욱 강렬하게 돌아온 태양의 맛!'},
  {img:'snack_10.jpg',pcImg:'snack_10-1.jpeg', imgNarr:'감자칩계의 양대 산맥 중 하나인 스윙칩의 새로운 제형이 출시되었습니다. <br />\  기존 스윙칩의 굴곡보다 60% 더 깊어져 두 배 더 크런치한 식감을 느낄 수 있으며, 씹는 맛이 살아있는 감자칩입니다. <br />\
  <br />\  <br />\  깊어진 굴곡 사이사이로 스며든 풍부한 폭립바베큐맛은 특제소스로 깊은 맛을 내 감칠맛이 풍부하며, 양념이 잘 배어있어 진한 맛을 느낄 수 있습니다.', title:'스윙칩V', content:'깊어진 V굴곡으로 더 바삭해진 스윙칩V'},
  {img:'snack_12.jpg',pcImg:'snack_11-1.jpg', imgNarr:'무뚝뚝감자칩이 맛있는 비밀! <br />\  生감자를 껍질째 두툼~하게 썰었습니다.  <br />\
  저온&진공 프라이 공법으로 담백하고 진한 감자맛을 살렸습니다.  <br />\  바삭하게 부서지는 입안 가득 씹히는 식감이 재미있습니다.', title:'무뚝뚝감자칩', content:'감자맛이 풍부한 두툼한 生감자칩'},
  {img:'snack_11.jpg',pcImg:'snack_12-1.jpg', imgNarr:'끝까지! 생감자칩  <br />\  생감자칩 25년 외길로 만들어낸 포카칩 정신이 끝까지 제대로 감자맛 을 느껴지게 합니다. <br />\
  <br />\  1) 자연 그대로 좋은 감자만 씁니다. <br />\  2) 좋은 감자를 선별합니다. <br />\  3) 포카칩만의 25년 제조노하우로 만듭니다.', title:'포카칩', content:'25년 외길로 만들어낸 포카칩 정신이 끝까지 제대로 감자맛'},
  {img:'snack_13.jpg',pcImg:'snack_13-1.jpg', imgNarr:'맛도 모양도 풍부한 엣지 감자칩 <br />\  바삭 와자작! <br />\  엣지(Edge)마다 느껴지는 스윙칩만의 <br />\  진하고 풍부한 맛을 즐겨보세요! <br />\
  <br />\  <br />\  1) 스윙칩 볶음고추장맛 <br />\  <br />\  볶음고추장의 매콤달콤한 맛이 <br />\  두꺼운 감자를 만나 더욱 진하고 풍부해진 맛! <br />\ <br />\ <br />\  2) 스윙칩 간장치킨 <br />\
  <br />\  진하고 풍부한 간장치킨 맛 그대로! <br />\  지금껏 경험해보지 못한 진한 달콤 짭조름 간장치킨 양념!', title:'스윙칩', content:'맛도 모양도 풍부한 엣지'},
  {img:'snack_14.jpg',pcImg:'snack_14-1.jpg', imgNarr:'생감자칩이 주류를 이루던 스낵시장에서 가운데 구멍이 뻥 뚫린 스틱형을 선보이며 출시 직후부터 <br />\  소비자들의 선풍적인 인기를 얻은 오!감자 <br />\
  <br />\  깨물 땐 탁 터지고, 씹을 땐 바삭거리는 느낌, 입안에선 부드럽게 살살 녹는 스낵입니다.\  <br />\  <br />\  구멍이 뻥~ 뚫려 있어 보기에 재미있고 막대기형이라 먹기에 너무 너무 편리한 맛있고 재미있고 찍어먹으면 더 맛있는 별난감자 오!감자', title:'오! 감자', content:'감자칩이 지루 할 때 별난감자'},
  {img:'snack_15.jpg',pcImg:'snack_15-1.png', imgNarr:'국내 최초! 생감자 스틱   "눈을 감으면 자꾸 생각나. 눈을감자" <br />\ <br />\
  감자 그대로의 맛이 살아있는 날씬한 生감자 스틱 <br />\  ‘눈을감자’. <br />\  생감자를 그대로 썰어 만든 눈을감자는 감자 그대로의 담백한 맛을 스틱형태로 깔끔하게 즐길 수 있는 새로운 감자스낵입니다. <br />\
  이제 눈을 감자의 담백하고 깔끔한 맛을 즐겨보세요. <br />\  <br />\  <br />\  <br />\  알싸한 와사비맛과 오독오독한 生감자스틱의 만남! 눈을감자 와사비맛 <br />\  <br />\  -오독오독한 식감과 알싸한 와사비맛의 완벽한 조화!  <br />\
  -너무 세지 않아 부담없는 와사비강도로, 가볍게 즐길 수 있는 와사비스낵! ', title:'눈을감자', content:'눈을 감으면 자꾸 생각나'},
  {img:'snack_16.jpg',pcImg:'snack_16-1.jpg', imgNarr:'Crazy for Nacho! <br />\ <br />\  오리온 대단한 나쵸는 손으로 집기 편한 직사각형의 나쵸칩으로, 멕시코풍의 고소한 나쵸 맛을 그대로 느낄 수 있습니다. <br />\
  <br />\  미치도록 대단히 맛있는 대단한 나쵸는 시원한 맥주나 음료수와 함께 먹어도 맛있습니다! <br />\  <br />\  지금 대단한 나쵸의 정열적인 매력에 흠뻑 빠져보세요. <br />\
  정통 삼각형 나쵸칩은 오리온 도도한 나쵸뿐입니다.', title:'대단한나쵸', content:'오리지널 나쵸맛의 멕시코풍 정통 나쵸 스낵'},
  {img:'snack_17.jpg',pcImg:'snack_17-1.jpg', imgNarr:'"바다의 상쾌함과 땅콩의 고소함을 한 봉지에 쏙쏙~!" <br />\  <br />\
1976년 여름 우리는 새로운 개념의 스낵을 만나게 됩니다. <br />\바로 한가지 맛으로 구성된 기존 제품들과는 달리 밀가루, 오징어, 땅콩의 세가지 맛이 절묘하게 어우러진 오징어땅콩이 그것이죠. <br />\
<br />\ 오징어 땅콩은 잘 구운 오징어와 정성된 땅콩을 우리 입맛에 잘 조화시킨 정통 고급스낵입니다. <br />\
<br />\ 바삭바삭하면서 먹을수록 입맛이 당기는 오징어의 감칠맛과 고소한 땅콩의 뒷맛이 일품이죠. <br />\
<br />\ 또한 오징어 땅콩은 아빠의 술안주에도, 친구들과의 즐거운 시간에도 함께 하는 맛 좋은 스낵이랍니다. <br />\
<br />\ 오리온 오징어 땅콩! 언제나 소비자 여러분께 사랑 받는 이유, 이제 아시겠죠?', title:'오징어땅콩', content:'40년을 한결같이 사랑 받아온 대한민국 대표 스낵'},
  {img:'snack_18.jpg',pcImg:'snack_18-1.jpg', imgNarr:'"옛 맛을 멋스럽게 되살린 오리온 강정"<br />\  <br />\
  약과, 다식 등과 함께 예로부터 사랑 받아온 우리 전통의 먹거리, 강정.<br />\  <br />\
  강정의 옛 맛을 그대로 살려 현대화한 오리온 강정은 고소한 땅콩과 퍼핑된 알갱이가 버무려져 바삭바삭하고 고소한 정통한과입니다.<br />\
  <br />\  땅콩함량이 25%로 늘어나 고소한 풍미와 바삭함이 강화된 정통스낵 땅콩강정은 일반땅콩 대비 단순불포화 지방산의 함량이 높은 하이올레익 땅콩을 사용합니다.<br />\
  <br />\  바삭하면서 입안에 도는 감칠맛! 모두가 즐길 수 있는 친근한 전통스낵, 오리온 강정!<br />\
  <br />\  가족끼리의 단란한 대화 시간에 함께 즐겨보세요.', title:'땅콩강정', content:'전통을 승화시킨 고유의 양반스낵'},
  

  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------


  {img:'biscuit_01.png',pcImg:'biscuit_02-1.jpg', imgNarr:'기름에 튀기지 않아 담백한 예감<br />\
  밀가루 0%, 감자로만 반죽해 감자맛이 풍부한 감자칩<br />\  "NEW 볶은양파맛 : 달콤한 볶은 양파가 콕콕!"', title:'예감', content:'기름에 튀기지 않아 담백한'},
  {img:'biscuit_02.jpg',pcImg:'biscuit_02-1.png', imgNarr:'- 소비자 재출시 요청에 7년만에 돌아온 배배 <br />\
  - 사르르 녹는 부드러운 식감<br />\  - 달콤 고소하게 풍부한 우유풍미', title:'배배', content:'달콤 사르르 쿠키'},
  {img:'biscuit_03.png',pcImg:'biscuit_03-2.jpg', imgNarr:'크루아상맛 : 40시간 발효풍미로 고소하고 달달한 크루아상맛! <br />\
  갈릭바게트맛 : 진짜 갈릭, 진짜 버터가 더해진 리얼 갈릭바게트맛!', title:'쿠쉬쿠쉬', content:'40시간 발효, 빵처럼 만든 크래커'},
  {img:'biscuit_04.png',pcImg:'biscuit_04-1.jpg', imgNarr:'“이렇게 촉촉~해도 되는 거야~?” <br />\  <br />\  <br />\
  부드러운 코코아쿠키 속에 진한 초콜릿을 20% 이상 함유해 코코아쿠키의 진한 맛과 초콜릿의 달콤한 맛을함께 느낄 수 있는 <br />\  고급 소프트쿠키, "촉촉한 초코칩" <br />\
  <br />\  "초코칩쿠키"와 함께 즐기는 오리온의 초코칩 형제입니다.', title:'촉촉한 초코칩', content:'따라올 수 없는 단 하나의 촉촉함'},
  {img:'biscuit_05.png',pcImg:'biscuit_05-1.jpg', imgNarr:'재미로 먹고 맛으로 먹는 고래밥 <br />\  고래밥 뿐만아니라 상어밥까지 총 16가지 해양생물 캐릭터가 들어있어 <br />\
  맛과 재미를 동시에 즐길 수 있는 국민과자입니다. <br />\  <br />\  <br />\  고래밥에는 [고래, 오징어, 불가사리, 돌고래, 꽃게, 복어, 거북이, 다랑어] <br />\
  <br />\  <br />\  고래는 라두, 오징어는 지엉징가, 다랑어는 따랑해, 망치상어는 솜망치 등 <br />\  캐릭터마다의 이름도 재미를 더해줍니다.', title:'고래밥', content:'재미로 먹고 맛으로 먹는'},
  {img:'biscuit_06.png',pcImg:'biscuit_06-1.jpg', imgNarr:'가벼운 식감을 사각사각 씹어먹는 재미가 가득! <br />\  통밀 15% 함유. 고소하게 즐기는 통밀스틱 <br />\  <br />\  <br />\
  통크 초코-통밀의 고소함을 풍부하게 하는 달콤한 초콜릿', title:'통크', content:'바삭바삭한 스틱안에 크림이 듬뿍'},
  {img:'biscuit_07.jpg',pcImg:'biscuit_07-1.jpg', imgNarr:'다양한 비스킷을 크림과 함께 출출할때 간편하게 즐기세요 <br />\  <br />\ <br />\
  오리온샌드 다이제 : 든든한 통밀비스킷+밀크크림 <br />\  오리온샌드 까메오 : 진한 카카오비스킷+화이트크림 <br />\  오리온샌드 나 : 부드러운 소프트비스킷+치즈크림', title:'오리온 샌드', content:'비스킷이 맛있는 오리온샌드'},
  {img:'biscuit_08.jpg',pcImg:'biscuit_08-1.jpeg', imgNarr:'귀여운 초코모자를 눌러쓴 재미있는 초코송이~ <br />\
  <br />\  <br />\  달콤한 초코머리와 바삭한 비스킷의 환상 궁합 초코머리의 초콜릿이 더욱 깊어졌습니다. <br />\
  초콜릿의 달콤함, 비스킷의 바삭함, 송이머리의 즐거움까지 한번에 맛보세요. <br />\  <br />\  <br />\
  해외에서도 "초코보이"라는 이름으로 사랑을 받고 있습니다.', title:'초코송이', content:'초코따로 과자따로 재미있는 초코과자'},
  {img:'biscuit_09.png',pcImg:'biscuit_09-1.jpg', imgNarr:'1.고래밥 친구들이 커졌어요. 크기도 UP!! 재미도 UP!! <br />\  <br />\
  2.스낵처럼 가볍게, 다같이 봉지로 즐기세요! <br />\  <br />\  3.튀기지 않고 오븐에 구웠어요. 6겹의 반죽으로 더욱 바삭해요!', title:'왕고래밥', content:'재미도 왕!! 맛도 왕!!'},
  {img:'biscuit_10.png',pcImg:'biscuit_10-1.jpeg', imgNarr:'– 미쯔블랙(MIZ BLACK)<br />\  언제 어디서나 간편히 즐길 수 있는 미쯔 스낵팩', title:'미쯔블랙', content:'뺏길 수 없는 나만의 비스킷'},
  {img:'biscuit_11.gif',pcImg:'biscuit_11-2.jpg', imgNarr:'♬초코가 외로워 쿠키를 만났네… <br />\  초코친구, 쿠키친구~♬ <br />\
  <br />\  <br />\  초코와 쿠키가 만났습니다. 바삭바삭한 쿠키 속에 초콜릿의 달콤함이 숨어있는 오리온 초코칩 쿠키! <br />\
  <br />\  쿠키 속에 초코칩이 박혀 있어 초콜릿의 달콤함과 쿠키의 담백함을 동시에 느낄 수 있습니다. <br />\  <br />\  "사랑은 그렇게 왔다!" <br />\
  사랑을 전하는 쿠키, 오리온 초코칩쿠키.', title:'초코칩쿠키 미니', content:'깜찍한 미니쿠키속에 진한 초코칩이 팍팍~'},
  {img:'biscuit_12.jpg',pcImg:'biscuit_12-1.jpeg', imgNarr:'초코가 외로워 쿠키를 만났네~♪ <br />\  언제 어디서나 간편히 즐길 수 있는 초코칩미니 스낵팩 초코와 쿠키가 만났습니다. <br />\
  <br />\  바삭바삭한 쿠키 속에 초콜릿의 달콤함이 숨어있는 오리온 초코칩 쿠키! <br />\  쿠키 속에 초코집이 박혀 있어 초콜릿의 달콤함과 쿠키의 담백함을 동시에 느낄 수 있습니다.', title:'초코칩쿠키', content:'새로운 맛의 장을 연 쿠키와 초콜릿의 절묘한 조화'},
  {img:'biscuit_13.png',pcImg:'biscuit_13-2.jpg', imgNarr:'얇고 바삭한 크래커 위에 <br />\  참깨를 송송 뿌려 <br />\  한 입 한 입, 입 안에 고소함이 전해지는 <br />\
  고소한 크래커', title:'고소미', content:'고소한 크래커'},


  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------

  
  {img:'gum_01.jpg',pcImg:'gum_01-1.jpg', imgNarr:'- 졸음도 피로도 깨워주는 타우린(2%) 함유<br />\
  - 두 가지 맛(페퍼민트, 유칼립투스)로 골라먹는 재미<br />\
  - 한 알로도 졸음 깨기 충분한 커다란 크기 (3.2g)', title:'열려라잠깨껌', content:'강렬한 상쾌함으로 졸음이 확~'},
  {img:'gum_02.png',pcImg:'gum_02-1.jpg', imgNarr:'더 자일리톨소프트는 이름처럼 처럼 ‘부드러움’이 가장 큰 특징입니다. <br />\  <br />\
  <br />\  딱딱하고 씹을수록 질겨지는 불편함 없이, 처음부터 끝까지 부드럽게 즐길 수 있는 새로운 식감의 자일리톨 껌 입니다.  <br />\
  <br />\  <br />\  하나. 처음부터 끝까지 부드러운 식감! <br />\         자일리톨로 만든 ""쿨링크리스탈""과 얇은 코팅막이 처음부터 끝까지 부드럽게! <br />\ <br />\
  둘. 사각사각 씹히는 자일리톨의 상쾌함!   <br />\      자일리톨로 만든 결정인 ‘쿨링크리스탈’이 상쾌함을 더해줍니다 (자일리톨 40.2%) <br />\ <br />\
  셋. 자몽맛,애플맛 두 가지 맛으로 골라먹는 재미까지  ', title:'더 자일리톨 소프트', content:'처음부터 끝까지 부드러운 껌'},
  {img:'gum_03.jpg',pcImg:'gum_03-2.jpg', imgNarr:'1. 바삭바삭 깨지는 코팅 껌 속에 새콤한 파우더가 가득!! <br />\
  <br />\  <br />\  2. 신맛이 2배 더 강한 슈퍼레몬맛이 숨어있어요! <br />\     친구들과 복불복 게임을 즐겨보세요.  <br />\     <br />\     <br />\
  3. 청포도, 사과, 레몬 세 가지 맛으로 다양하게 짜릿하게! <br />\  씹는 순간 터지는 짜릿한 신맛에 도전하세요! ', title:'아이셔껌', content:'강렬한 신맛! 복불복 아이셔 껌'},
  {img:'gum_04.jpg',pcImg:'gum_04-1.png', imgNarr:'1) 비타민C 풍부! (100g당 30mg 함유) <br />\  비타민C가 풍부하게 들어있어 더 상큼하고 깔끔해요 <br />\
  <br />\  <br />\  2) 재미있는 펌프용기로 편하게 쏙! <br />\  달지 않고 상큼한 3가지 과일민트, 청포도 / 자몽 / 라임! <br />\  <br />\
  <br />\  3) 재미있는 펌프용기로 편하게 쏙! <br />\   한 알씩 깔끔하게 꺼내먹을 수 있어 더욱 기분 좋아요', title:'더자일리톨 비타C', content:'비타민 C가 풍부한 상큼한'},
  {img:'gum_05.jpg',pcImg:'gum_05-1.jpg', imgNarr:'가족의 치아건강 & 지갑사정을 모두 고려한 소비자(주부)를 위해 <br />\
  오리온 자일리톨이 좋은 제품을 착한 가격에 더! 드립니다! <br />\  <br />\  <br />\  [달지않아 깔끔한 더 자일리톨 껌] <br />\
  - 더 드려요!  가성비 UP  <br />\  - 더 깔끔해요!  달지않고 상쾌한 과일민트  <br />\  - 더 재밌어요!  골라먹는 3가지 과일맛 (사과, 레몬, 복숭아)', title:'더 자일리톨', content:'좋은 제품을 착한 가격에, 더! 드립니다'},
  {img:'gum_06.jpg',pcImg:'gum_06-1.jpg', imgNarr:'1.경쟁사 대비 동일한 9매에 가격은 20% 더 저렴하게 <br />\  <br />\  <br />\
  2. 달지 않아 텁텁하지 않은 깔끔한 상쾌함 <br />\  <br />\  <br />\  3. 오래 씹어도 질겨지지 않는 부드러운 탄성으로 편안하게 <br />\
  <br />\  <br />\  4. 기분에 따라 골라먹는 두 가지 맛 <br />\  깔끔한 청량감이 돋보이는 후라보노 쿨민트 <br />\  자스민과 복숭아 향이 은은하게 상쾌한 후라보노 스위트민트', title:'후바보노', content:'씹을수록 상쾌하게'},
  {img:'gum_07.jpg',pcImg:'gum_07-1.jpg', imgNarr:'맛도, 길이도 더 길~어졌습니다 <br />\  <br />\  <br />\
  와우 톡톡콜라(NEW!) <br />\  재밌게 씹히는 톡톡캔디와 새콤달콤 진한 콜라맛이 더욱 맛있는 와우 <br />\  <br />\
  와우 베리소다 <br />\  달콤한 베리와 상쾌한 소다가 만나 신선하고 새로운 베리소다맛 와우 <br />\  <br />\
  와우 소다 <br />\  소다 칩이 들어있어 톡톡 튀는 소다 맛을 입 안 가득 느낄 수 있는 와우 <br />\  <br />\
  와우 포도 <br />\  진한 포도 농축 과즙을 넣어 보다 깊은 과일맛을 느낄 수 있는 와우 <br />\  <br />\
  와우 플럼 <br />\  달콤 새콤한 플럼 과즙으로 기분까지 상큼해지는 플럼맛 와우', title:'와우', content:'나를 Wow하게 하는 껌'},

  
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------


  {img:'candy_01.jpg',pcImg:'candy_01-1.jpg', imgNarr:'새콤~달콤~짜릿! <br />\  1. 사워 파우더로 짜릿한 즐거움! <br />\  - 사워 파우더를 코팅해 새콤달콤 짜릿한 신맛을 느껴보세요. <br />\
  <br />\  2. 쫀득쫀득 매력적인 식감! <br />\   - 찰지고 쫀득해서 중독적인 식감이에요. <br />\
   <br />\  3. 두 가지 과일 맛으로 즐기는 사워 꿈틀이! <br />\   - 상큼한 자두맛과 향긋한 파인애플 두 가지 맛을 한봉지에서 즐겨보세요.', title:'샤워꿈들이', content:'사워 파우더로 짜릿해진 꿈틀이'},
  {img:'candy_02.jpg',pcImg:'candy_02-1.jpg', imgNarr:'1. 새로워진 식감! <br />\ - 찰지고 쫀득한 새로워진 식감을 느껴보세요. <br />\  <br />\
 2. 과즙 20%, 과육 함유!  <br />\  - 더욱 더 진해진 과일 풍미를 느껴보세요. <br />\  <br />\ 3. 2가지 맛이 한봉지에! <br />\
  - 포도&복숭아 / 망고&파인애플 <br />\  <br />\ 4. 상큼하게 리프레시가 필요할 때 즐겨보세요!', title:'젤리데이', content:'쫀득쫀득 말린과일 식감!'},
  {img:'candy_03.png',pcImg:'candy_03-1.jpg', imgNarr:'맑은 숨, 유칼립.톨! <br />\  <br />\  <br />\
  1. 유칼립투스 오일 + 멘톨의 만남! <br />\   - 강력한 상쾌함으로 목과 코를 시원하게 뚫어줘요. <br />\   <br />\
  2. 깔끔한 상쾌함! <br />\   - 쓰거나 텁텁하지 않고 끝까지 상쾌함이 유지돼요. <br />\   <br />\
  3. 한 손에 들어오는 소형 파우치 <br />\   - 주머니나, 자동차에 휴대하기 편리해요.', title:'유칼립.톨', content:'숲 속의 상쾌함을 담다.'},
  {img:'candy_04.jpg',pcImg:'candy_04-1.jpg', imgNarr:'고소~한 땅콩이 가득! "오리온 땅콩 카라멜" <br />\  <br />\  <br />\
  1. 땅콩이 20% 들어 있어 진한 고소함을 느낄 수 있어요. <br />\<br />\  2. 콕콕 박힌 땅콩 알갱이로 씹는 재미 UP! <br />\ <br />\
  3. 치아에 붙지 않는 쫄깃한 식감!  <br />\ <br />\  4. 상황에 따라 즐기는 2가가지 타입 <br />\   - 휴대하기 간편한 "케이스" 타입  <br />\
   - 대용량으로 나눠 먹기 편리한 "봉투" 타입', title:'땅콩 카라멜', content:'SINCE 1979 카라멜 원조'},
  {img:'candy_05.png',pcImg:'candy_05-1.jpg', imgNarr:'1. 즉각적인 신맛 <br />\  - 사워 파우더 코팅으로 입에 넣는 순간 짜릿한 신맛 경험! <br />\
  <br />\  <br />\ 2. 과즙 20% 함량 <br />\  - 포도, 사과, 레몬, 오렌지 4가지의 풍부한 과일 맛을 느껴보세요.', title:'비틀즈샤워', content:'입 안에 넣는 순간 짜릿한 신맛'},
  {img:'candy_06.jpg',pcImg:'candy_06-1.jpeg', imgNarr:'편리해진 포장 "더 탱글 마이구미" <br />\  <br />\
  1. 탱글해진 식감 <br />\   - 탄력을 올려 탱글탱글! 이에 붙지 않는 식감으로 즐기세요. <br />\   <br />\
  2. 소포장 대용량  <br />\   - 미니 사이즈의 포장으로 휴대성 UP! 외출할 때마다 가방에 쏘옥! <br />\   <br />\
  3. 3가지 과일 맛을 한 봉지에! <br />\   - 포도맛, 복숭아맛, 사과맛의 각기 다른 매력을 느껴보세요! <br />\   <br />\
  4. 과즙 50% (생물 환산 기준) <br />\   - 과즙 구미의 대명사 답게 풍부한 과일 맛을 느낄 수 있어요.', title:'더 탱클 마이구미', content:'더 탱글해진 식감'},
  {img:'candy_07.png',pcImg:'candy_07-1.jpg', imgNarr:'1. 랜덤으로 들어있는 4가지 모양의 대왕젤리를 찾아보세요! <br />\  <br />\  <br />\
  2. 생과즙 50%로 다양하게 즐기는 세 가지 과일맛 <br />\  <br />\  <br />\
  3. 4가지 모양의 바다친구들로 보는 재미도 UP! <br />\     꽃게, 고레, 거북이, 문어 4종이 들어있어요', title:'대왕젤리밥', content:'쫄깃 쫄깃 재미로 먹는 대왕젤리밥'},
  {img:'candy_08.png',pcImg:'candy_08-1.jpg', imgNarr:'더욱 풍부한 과즙 그대로의 맛! <br />\  하트 모양에 쫄깃한 식감이 살아있는 마이구미 <br />\
  <br />\  <br />\  1) 상큼 달콤한 과즙 맛 <br />\  과즙이 50% 들어있어 풍부한 과즙 맛이 그대로! <br />\
  <br />\  <br />\  2) 먹는 재미 + 보는 재미 <br />\  부드럽고 탱탱한 식감이 씹기에 딱! <br />\  귀여운 하트모양 <br />\   ', title:'마이구미', content:'쫄깃한 식감이 살아있는 과즙 구미'},
  {img:'candy_09.png',pcImg:'candy_09-1.jpg', imgNarr:'1. 쫄깃한 츄잉캔디 속에 짜릿한 사워 파우더가 가득! <br />\
  - 이에 붙지 않고, 쫄깃한 식감이 살아 있는 아이셔 츄잉캔디! <br />\    씹는 순간 터지는 사워 파우더의 짜릿함을 느껴보세요! <br />\
    <br />\2. 비타민C가 들어있어 더욱 상큼하게! <br />\   - 한 케이스당 1일 영양성분 기준치 기준 비타민C를 100% 충족할 수 있어요. <br />\
   <br />\3. 두 가지 맛으로 즐기는 아이셔! <br />\ - 상큼한 청사과맛과 시원짜릿한 소다맛, <br />\
   두 가지 맛의 각기 다른 매력을 즐겨보세요!', title:'아이셔 츄잉캔디', content:'씹는 순간 터지는 짜릿한 신맛!'},
  {img:'candy_10.png',pcImg:'candy_10-1.jpg', imgNarr:'오리온 밀크 카라멜 <br />\ 1A등급 생우유 13%(총 우유류 함량20%) <br />\
  생우유의 풍미가 고소하고 부드러워요 <br />\ 달콤한 맛이 깔끔해요', title:'밀크캬라멜', content:'1979년부터사랑받아온 정통 캬라멜'},
  {img:'candy_11.jpg',pcImg:'candy_11-1.jpg', imgNarr:'캔디가 조화된 통아몬드 <br/>\  <br/>\  <br/>\
  그윽한 버터풍미의 캔디위에 살짝 구운 아몬드를 통째로 올린 바삭한 크런치 캔디입니다. <br/>\  <br/>\  우수한 품질의 아몬드 만을 엄선, 통째로 올려 입안 가득 고소하고 달콤한 풍미를 제대로 느끼실 수 있습니다.', title:'통아몬드 캔디', content:'고소한 통아몬드와 크런치'},
  {img:'candy_12.jpg',pcImg:'candy_12-1.jpg', imgNarr:'센터의 츄잉캔디를 바삭하게 코팅하여 처음 씹을 땐 코팅층의 바삭함을 느끼며 먹을 수록 쫄깃하고 <br/>\
  상큼한 맛이 느껴지는 브랜드 입니다.', title:'비틀즈', content:'상큼한 4가지 과일 맛의 크리스피 코팅 츄잉 캔디'},
  {img:'candy_13.png',pcImg:'candy_13-1.jpg', imgNarr:'1. FUN한 비주얼! <br />\  - 20cm 짜리 대왕 꿈틀이를 찾는 재미를 느껴보세요. <br />\
  <br />\  <br />\ 2. 청량한 콜라맛! <br />\  - 쫄깃한 식감의 콜라맛 미니 꿈틀이들이 들어 있어요.', title:'대왕꿈틀이', content:'길~게 늘여먹는 재미가 왕!'},
  {img:'candy_14.png',pcImg:'candy_14-1.jpg', imgNarr:'상큼한 과일소다 맛과 재미있는 꿈틀이 모양으로 어린이들에게 최고의 사랑을 받는 no.1 키즈 구미 브랜드입니다. <br />\
  꿈틀이를 길게 쭈~욱 늘여먹거나 단 한 마리의 콜라맛 왕꿈틀이를 찾아먹는 재미가 있습니다. <br />\  대왕꿈틀이를 절대 놓치지 마세요! <br />\
  쫄깃한 식감은 어린이들이 음식을 꼭꼭 씹어먹는 식습관을 기르는데 도움이 됩니다.', title:'왕꿈틀이', content:'상큼한 맛과 재미있는 꿈틀이 모양의 젤리'},
  {img:'candy_15.jpg',pcImg:'candy_15-1.jpg', imgNarr:'저온 농축공법을 이용해 1A등급 생우유 그대로의 풍미와 부드러운 식감을 살린 것이 특징인 소프트 캔디입니다. <br />\  <br />\
  우유 품질 분류기준(세균수 기준)에서 최상위 등급을 받은 1A등급 생우유로 만들어 분말유크림만 넣은 제품에 비해 맛이 부드러운 것이 특징입니다. <br />\  <br />\
  바이오 생우유 캔디는 신선한 1A등급 생우유에 칼슘까지 함유되어 어린이는 물론 치아가 약한 노인분들까지 우리가족 건강간식으로 즐길 수 있습니다. <br />\  <br />\
  바이오 생과즙 캔디는 사과, 메론, 복숭아 3가지 맛에 비타민c까지 함유되어 어린이는 물론 치아가 약한 노인분들까지 우리가족 건강간식으로 즐길 수 있습니다.', title:'바이오캔디', content:'신선한 1A등급 생우유를 넣어 더욱 부드러운 소프트 캔디'},

  
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------

  
  {img:'chocolate_01.jpg',pcImg:'chocolate_01-1.webp', imgNarr:'- 고소한 통밀 다이제 풍미의 달콤바삭 초코볼! <br />\  - 다이제 쿠키에 진~한 투유 초콜릿을 겹겹이 코팅하여 완성! <br />\
  - 우유, 생크림, 아이스크림 등에 넣어 재밌게 즐겨보세요!', title:'다이제볼', content:'동글동글 귀여운 통밀 초코볼'},
  {img:'chocolate_02.jpg',pcImg:'chocolate_02-1.jpeg', imgNarr:'내 사랑 투유~♪ <br />\  1987년 출시되어 많은 사랑을 받았던 투유 초콜릿이 <br />\
  우유 맛 진~한 우유초콜릿으로 돌아왔습니다! <br />\  <br />\  <br />\  [우유초콜릿이니까, 우유부터 남다르게] <br />\
  1년 365일 신선한 풀을 먹고 자란 젖소의 우유로 만들어 <br />\  더욱 진하고 부드러운 우유 맛!', title:'투유 우유초콜릿', content:'우유 맛 진~한'},
  {img:'chocolate_03.jpg',pcImg:'chocolate_03-1.jpg', imgNarr:'- 풍부한 우유 크림으로 부드러움이 입안 가득 <br />\
  - 우유초콜릿과 액상 커피가 만나 카페라떼 맛 그대로 <br />\  - 한 번에 먹기 적당한 양과 편리한 포장', title:'투유 카페라떼', content:'부드러운 우유와 진한 커피의 만남!'},
  {img:'chocolate_04.jpg',pcImg:'chocolate_04-1.jpg', imgNarr:'투유 미니는 한 입에 쏙 들어가는 미니사이즈로 <br />\
  언제 어디서나 간편하고 깔끔하게 즐길 수 있습니다. <br />\  <br />\  <br />\  - 우유초콜릿 : 프랑스 목초우유를 넣어 진한 우유 맛! <br />\
  - 크런치 : 우유초콜릿에 곡물퍼프, 히말라야핑크소금을 넣어 바삭단짠의 맛!', title:'투유미니', content:'진~한 우유초콜릿을 한입에 쏙!'},
  {img:'chocolate_05.jpg',pcImg:'chocolate_05-2.jpg', imgNarr:'땅콩과 아몬드로 꽉~ 채워 더욱 든든한 초코바 핫브레이크 <br/>\  부드럽고 우유 맛이 풍부해진 새로운 누가 속에 가득찬 견과류로 더욱 풍부해진 맛과 영양, 그리고 든든함 <br/>\
  겨울철 스키장에서, 신나는 캠핑장에서, 친구들과 어울린 길거리에서, 주머니 속에 든든함을 꼭 챙기세요! <br/>\  <br/>\  <br/>\
  [더욱 알차지고 맛있어진 오리온 핫브레이크] <br/>\  - 27%의 풍부한 견과류에 땅콩페이스트 20% 증량으로 고소함이 UP! <br/>\  - 전부과 시럽을 줄여 부드럽고 먹기 편해진 누가 <br/>\
  - 초코칩 23% 증량으로 더욱 풍부해진 초콜릿 맛', title:'핫브레이커', content:'알차게 재충전'},
  {img:'chocolate_06.jpg',pcImg:'chocolate_06-1.jpg', imgNarr:'손에서는 안 녹아요~ 입안에서만 사르르~ <br />\  <br />\
  <br />\  언제 어디서나 편하고 쉽게 즐길 수 있는 캐쥬얼 초콜릿 새알 손에 녹지않아 더욱 좋아요 <br />\  <br />\
  새알은 초콜릿 볼에 코팅을 해 손에 녹지않기 때문에, 더욱 편하고 쉽게 즐길 수 있는 초콜릿입니다. <br />\  <br />\
  볼타입이라 언제 어디서나 초콜릿을 즐길 수 있게 해줍니다.', title:'새알', content:'손에 녹지 않는 초코볼'}
];

var productBox = $('#productBox');
productBox.append('<ul class="product_all product clearfix active"></ul>');
var productBoxUl_00 = productBox.children('.product_all');

var textEl = function(i){
  var	listEl = '<li>\
          <a href="#">\
            <div class="All_img img"><span class="hidden">'+ product_all[i].imgNarr +'</span></div>\
            <em class="all_em">'+ product_all[i].content +'</em>\
            <p class="all_p">'+ product_all[i].title +'</p>\
          </a>\
          </li>';
  return listEl;
};


// ==============================================================

// var ModalLink = function(){
  
  // start
  var productBox = $(document).find('#productBox');
  var productList = productBox.find('.product');
  var productBoxLi = productList.find('li');
  
  
  productBox.append('<div class="more_btn"><button type="button">더보기</button></div>');
  var moreBtn  = productBox.find('.more_btn');
  /*

    var i=0;
    var firstView = 20;var i=0;
    var person;
    var firstView = 20;
    var myView = 8;
    var maxN = product_all.length;

    var InsertLi = function(prLen){
      
      var myView = 8;
      var maxN = product_all.length;   // data.length; // 보여주고싶은갯수를 설정
      
      var k = prLen || myView;
      
      var j = i + k;
      if(j>product_all.length){j = product_all.length; }
      // console.log(i, k)
      for(; i<j; i++){			
        var imgUrl ='../img/orion_product/product/All/';
        productBoxUl_00.append( textEl(i) );
        productBoxUl_00.children('li').eq(i).find('.img').css({
                              backgroundImage:'url('+ imgUrl +product_all[i].img +')',
                              backgroundRepeat:'no-repeat',
                              backgroundPosition:'50% 50%',
                            });
                          }



      if(i >= maxN){
        console.log(maxN);
        moreBtn.hide();
        // break;
      }else{				
        productBoxUl_00.append(textEl(i));
        // productBoxUl_00.find('li').eq(i).find('span').text(db[i].displayName);
      }
  };
  
  
      // 더보기 버튼 클릭
      // InsertLi(listData, colorArr);
      moreBtn.on('click', function(){
        InsertLi();
      });

  
      
//       if(i >= maxN){moreBtn.hide()}
//       // ModalLink();
// // ---------------------------------------------
//     // imgZoom();
//     // ModalLink();
// //------------------------------------------------
//   };// loadData(n);
//   InsertLi(firstView);
  
//   moreBtn.on('click',function(e){
//     // 버튼을 눌렀을때 보이는 값
//     e.preventDefault();
//     e.bubbles = false;
//     InsertLi();

//   });
    // }
*/
    // --------------------------------------------------------------
  
  // var modalList = product_all;
  
  // var bigModalText = '<div class="big_modal">\
  //           <div class="big_img">\
  //             <div class="me_info"></div>\
  //             <div class="me_img"></div>\
  //             <div class="close_btn"><button type="button"><span class="hidden">닫기</span></button></div>\
  //           </div>\
  //           <div class="big_bg"></div></div>';
  
  // productBox.append(bigModalText);
  // var bigModal = productBox.children('.big_modal');
  // var bigModalBtn = bigModal.find('.close_btn');
  // var bigImgBox = bigModal.find('.big_img');
  // var bigBg = bigModal.find('.big_bg');
  // var meImg = bigModal.find('.me_img');
  // var menuInfo = bigModal.find('.me_info');
  
  // var bigUrl = '../img/orion_product/product/All/';
  
  // var mainMenu = $('.main_menu');
  // var mainMenuLi = mainMenu.find('li');
  
  // var mainMenuLiIndex = 0;
  
  // // console.log(modalList);
  
  // var Fnmodal = function(mainMenuLiIndex){
  //   if(mainMenuLiIndex==0){
  //     // console.log('subMenu : '+(mainMenuLiIndex+1));
  //     return product_all;
  //   }else if(mainMenuLiIndex==1){
  //     // console.log('subMenu : '+2);
  //     return product_pie;
  //   }else if(mainMenuLiIndex==2){
  //     // console.log('subMenu : '+3);
  //     return product_snack;
  //   }else if(mainMenuLiIndex==3){
  //     // console.log('subMenu : '+4);
  //     return product_biscuit;
  //   }else if(mainMenuLiIndex==4){
  //     // console.log('subMenu : '+5);
  //     return product_gum;
  //   }else if(mainMenuLiIndex==5){
  //     // console.log('subMenu : '+6);
  //     return product_candy;
  //   }else if(mainMenuLiIndex==6){
  //     // console.log('subMenu : '+7);
  //     return product_chocolate;
  //   }
  // }
  
  // mainMenuLi.find('a').on('click',function(e){
  //   e.preventDefault();
  //   mainMenuLiIndex = $(this).parent('li').index();
  //   // modalList = 'newList_0'+(subMenuLiIndex+1);
  //   modalList = Fnmodal(mainMenuLiIndex);
  //   // console.log(modalList);
  // });
  
  // mainMenuLi.find('a').on('focus',function(e){
  //   e.preventDefault();
  //   mainMenuLiIndex = $(this).parent('li').index();
  //   // modalList = 'newList_0'+(subMenuLiIndex+1);
  //   modalList = Fnmodal(mainMenuLiIndex);
  //   // console.log(modalList);
  // });
  
  // var menuInfoText = '<p>title</p><br/><p>content</p><br/><p></p>';
  // menuInfo.append(menuInfoText);
  // menuInfo.css({backgroundImage: 'linear-gradient(-90deg, #D81425, #fff)'});
  // menuInfo = bigModal.find('.me_info');
  // menuInfoTitle = menuInfo.find('p').eq(0);
  // // menuInfoPrice = menuInfo.find('p').eq(1);
  // menuInfoContent = menuInfo.find('p').eq(1);
  // menuInfoEX = menuInfo.find('p').eq(2);
  
  // var bubbleFalse = true;
  // var menuTextChange = function(listN){
  //   bubbleFalse = false;
  //   menuInfoTitle.text(modalList[listN].title).css({fontSize:'2rem', fontWeight:'bold'});
  //   menuInfoContent.text(modalList[listN].content).css({fontSize:'1rem'});
  //   menuInfoEX.html(modalList[listN].imgNarr).css({padding:'8% 10%', textAlign:'left', fontSize:'0.7rem'});
  //   meImg.css({backgroundImage:'url('+bigUrl+modalList[listN].pcImg+')'});
  //   bubbleFalse = true;
  // }
  
  // // console.log(productBoxLi.find('a'));
  // productBoxLi.find('a').on('click',function(e){
  //   e.preventDefault();
  //   e.bubbles = false;
    
  //   var itIndex = $(this).parent('li').index();
  //   var n = itIndex;
  //   // console.log(n);
    
  //   menuTextChange(itIndex);
  //   meImg.css({backgroundImage:'url('+bigUrl+modalList[itIndex].pcImg+')',
  //   backgroundSize:'contain',backgroundPosition:'50% 50%',backgroundRepeat:'no-repeat'});
    
  //   bigModal.fadeIn(function(){
  //     $(window).on('keyup',function(evt){
  //       evt.preventDefault();
  
  //       if(bubbleFalse){
  //         bubbleFalse = false;
  //         evt.bubbles = false;
  //         var keyCode = evt.keyCode;
  //         console.log(keyCode);
  
  //         // 왼37, 오른39, 빠져나가기27
  //         if(keyCode ===37){
  //           n-=1;
  //           if(n<0){n=modalList.length-1;}
  //           // meImg.css({backgroundImage:'url('+bigUrl+modalList[n].pcImg+')'});
  //           menuTextChange(n);
  //         }else if(keyCode ===39){
  //           n+=1;
  //           if(n>modalList.length-1){n=0;}
  //           // meImg.css({backgroundImage:'url('+bigUrl+modalList[n].pcImg+')'});
  //           menuTextChange(n);
  //         }else if(keyCode ===27){
  //           bigModal.fadeOut(400,function(){
  //             productBoxLi.eq(0).find('a').focus();
  //           });
  //         }
  //       }
  //     });
  //   });
  // });
  
  
  // bigModalBtn.on('click',function(e){
  //   e.preventDefault();
  //   bigModal.fadeOut();
  // });
  // bigBg.on('click',function(){
  //   bigModal.fadeOut();
  // });
  
  
    // --------------------------------------
  
  
  
  // };