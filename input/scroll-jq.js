/* 2단계: 제이쿼리 */
var nav = $("nav");
var sections = $(".section");
var gnb = $(".gnb>li");
var sideNav = $(".sideNav>li");

var gap = 600;
//버튼 클릭해서 이동하기
gnb.click(function (e) {
	e.preventDefault(); //#의 기본 기능을 차단
	var tg = $(this); //사용자가 클릭한 버튼의 타겟이 저장
	var section = sections.eq(idx);
	var idx = tg.index(); //인덱스를 부여하여 저장
	var offset = section.offset().top - gap; //offset() : 요소의 위치(문서)
	$("html, body").animate({ scrollTop: offset }, 600, "easeOutExpo"); //offset 값을 scrollTop에 대입(애니메이션)
});
sideNav.click(function (e) {
	e.preventDefault();
	var target = $(this); //사용자가 클릭한 버튼의 타겟이 저장
	var index = target.index(); //인덱스를 부여하여 저장
	var section = sections.eq(index);
	var offset = section.offset().top - gap; //offset() : 요소의 위치(문서)
	$("html, body").animate({ scrollTop: offset }, 600, "easeOutExpo"); //offset 값을 scrollTop에 대입(애니메이션)
});

//스크롤이 됐을 때
$(window).scroll(function () {
	var scrollTop = $(window).scrollTop(); //scrollTop() : 브라우저의 위치 값
	scrollTop > 10000 ? nav.addClass("sticky") : nav.removeClass("sticky");
	sections.each(function (index) {
		if (scrollTop >= sections.eq(index).offset().top - gap) {
			sideNav.eq(index).addClass("on").siblings().removeClass("on");
			gnb.eq(index).addClass("on").siblings().removeClass("on");
			sections.eq(index).addClass("sectionIn");
		}

});
})

