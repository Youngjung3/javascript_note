const section = $("section");
const text = $(".txt");
const progressbar = $(".bar");
const windowHeight = $(window).height();
let scrollTop;

$(window).scroll(function () {
  scrollTop = $(this).scrollTop();

  let scrollHeight = section.height();
  let scrollRealHeight = scrollHeight - windowHeight;
  let scrollPercent = Math.floor((scrollTop / scrollRealHeight) * 100);
  if (scrollPercent >= 100) {
    scrollPercent = 100;
    }
  text.text(scrollPercent + "%");
  progressbar.css('width', scrollPercent + "%");
});
