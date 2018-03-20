$(document).ready(function(){
    // console.log('ok!');
    var menubar = $('.menubar, .btn-menubar');
    var menu = $('.menu');
    var btn = $('.btn-menubar');
    var bar = $('.menubar');

    menubar.on('click', function(){
        menu.toggleClass('menu-act');
        bar.toggleClass('menubar-act');
        if(manu.hasClass('menu-act')){
            btn.text('메뉴닫기');
        }else{
            btn.text('메뉴열기');
        }
    });
});