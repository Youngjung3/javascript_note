const section = $("section");
const text = $(".txt");
const progressbar = $(".bar");
const windowHeight = $(window).height();
let scrollTop;

// 퍼센트 계산
function getPercent(sct) {
  let scrollHeight = section.height();
  let scrollRealHeight = scrollHeight - windowHeight;
  // 부분/전체*100
  let scrollPercent = ((sct / scrollRealHeight) * 100);
  let textPercent = Math.floor((sct / scrollRealHeight) * 100);
  if (scrollPercent >= 100) {
    scrollPercent = 100;
  }
  console.log(scrollPercent);
  render(scrollPercent,textPercent); //argument, 인자, 인수
}

// 화면에 출력
function render(scrollPercent,t) { //parameter, 매개변수
  text.text(t + "%");
  progressbar.css("width", scrollPercent + "%");
}

// 스크롤 양 얻기
$(window).scroll(function () {
  scrollTop = $(this).scrollTop();
  getPercent(scrollTop);
});
