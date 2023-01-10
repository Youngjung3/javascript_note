/* //원뎁스 A를 변수 gnbLia 할당
let gnbLia=$(".gnb>li>a")
gnbLia.click(function(){
    //클래스의 삭제는 removeClass('on')
    //추가는 addClass('on')
    // gnbLia.next().addClass('on');
    // 1.딴거 다지우고 그놈만 붙이기
    // $('.sub').removeClass('on');
    // $(this).next().addClass('on');
    // 토글로 만들기
    if(!$(this).next().hasClass('on')){
        // $('.sub').removeClass('on');
        $(this).next().addClass('on');
    }else{
        $(this).next().removeClass('on');
    }
    console.log($(this).next().hasClass('on'));
}) */

let gnbLiA = $(".gnb>li>a");
//border,padding
let aH = $(".sub>li>a").outerHeight() - 3;
let check = false;

gnbLiA.click(function () {
  //지금은 on 클래스가 없다
  //전역변수로 임의의 불값을 선언한다

  $(".sub").css("height", "0px");
  $(this)
    .next()
    .css("height", aH * 4 + "px");

  //토글로 만들기
  //if 는 (true)
  function toggle() {
    if (!$(this).next().hasClass("on")) {
      $(".sub").removeClass("on");
      $(this).next().addClass("on");
    } else {
      $(this).next().removeClass("on");
    }
  }
});
