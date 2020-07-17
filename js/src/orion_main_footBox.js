// orion_main_footBox.js

(function($){
  var familySite = $('.family_site');
  var familySiteLink = familySite.children('a')
  var familySiteUl = familySite.find('ul');
  var familySiteLi = familySite.find('li');

  familySiteUl.hide();
  
  familySiteLink.on('click', function(e){
    e.preventDefault();
    familySiteUl.stop().slideUp(500);
    familySiteUl.stop().slideDown(500);
    familySite.addClass('action');
  });

  familySite.on('mouseleave', function(e){
    e.preventDefault();
    familySiteUl.stop().slideUp(500);
    familySite.removeClass('action');
  });

  
})(jQuery);