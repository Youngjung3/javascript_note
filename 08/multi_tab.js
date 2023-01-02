/* 
.tab-wrapper 버튼과 패널의 부모
    .tab-menu 버튼그룹 >a 요소
    .tab-content 패널그룹 >div 요소
*/

var tabWrapper=$(".tab-wrapper");
tabWrapper.each(function(){
    var currenEl=$(this);
    var menus=currenEl.find(".tab-menu a");
    var panels=currenEl.find(".tab-content>div");

    // 브라우저 이벤트 종류 -> event handler ->event object(이벤트가 발생한 대상의 정보를 가진 객체)
    menus.click(function(e){
        e.preventDefault();
        let tg=$(this);//this 이벤트가 발생한요소
        let currentLink=tg.attr("href");
        menus.removeClass("active");
        tg.addClass("active");
        panels.hide();
        $(currentLink).show();
    });
});