$(function() {
  var menu = $('div.med-header');

  menu.on('click', 'div.btn-menu-xs i.i-menu-xs',function( event ) {
    var block_menu = $(this).parents('div.btn-menu-xs').find('div.block-menu-xs');
    var i = $(this);
    if (block_menu.css('display') === 'none') {
        
        $({deg: 0}).animate({deg: 90}, {
          duration: 500,
          step: function(now){
              i.css({
                   transform: "rotate(" + now + "deg)"
              });
          }
        });
        //$(this).find('i').css("transform","rotate(90deg)");
        block_menu.show('explode');
    }else{
        $({deg: 90}).animate({deg: 0}, {
          duration: 500,
          step: function(now){
              i.css({
                   transform: "rotate(" + now + "deg)"
              });
          }
        });
        block_menu.hide('explode');
    }
  });

  menu.on('click', 'div.btn-menu-xs a.sub-menu-xs',function( event ) {
    var block_menu = $(this).next('ul.sub-menu-xs');
    var a = $(this);
    if (block_menu.css('display') === 'none') {
        block_menu.show('explode');
        $({deg: 0}).animate({deg: 90}, {
          duration: 500,
          step: function(now){
              a.find('span.icon-item i').css({
                   transform: "rotate(" + now + "deg)"
              });
          }
        });
    }else{
        block_menu.hide('explode');
        $({deg: 90}).animate({deg: 0}, {
          duration: 500,
          step: function(now){
              a.find('span.icon-item i').css({
                   transform: "rotate(" + now + "deg)"
              });
          }
        });
    }
  });
});