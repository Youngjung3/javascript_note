/* 1단계: 스크롤양 확인하기 */
/* 3단계: 스크롤양이 gap보다 크면 nav에 .sticky 추가 */
const gap = 500;
function js() {
	const sections = document.querySelectorAll("section");
	const nav = document.querySelector("nav");
	const gnb = nav.querySelectorAll(".gnb>li");

	let scrollTop;
	window.addEventListener("scroll", function () {
		scrollTop = window.scrollY;
		animate(scrollTop);
	});

	const animate = (sct) => {
		//sections
		sections.forEach((el) => {
			let sectionTop = el.offsetTop;
			if (sct > sectionTop - gap) {
				el.classList.add("sectionIn");
			}
		});
		//sticky-nav
		//(조건)?(참일때실행):(거짓일때실행)
		sct >= gap ? nav.classList.add("sticky") : nav.classList.remove("sticky");
		/*     if(sct>=gap){
      nav.classList.add("sticky");
      if(sct>=gap*2){
        nav.style.background='blue';
      }
    }else{
      nav.classList.remove("sticky");
      nav.style.background='rgba(255,0,255,0.5)';
    }
 */
	};
/* 그럼 이번에는 클릭안된 li의 on을 삭제합니다 */
	gnb.forEach((el) => {
		el.addEventListener("click", function (e) {
      e.preventDefault();
			document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({behavior:"smooth"}); 
      gnb.forEach((obj)=>{
        obj.classList.remove("on");
      })
      el.classList.add("on");
		});
	});


}
js();
/* 2단계: 제이쿼리 */
function jq() {
	const sections = $("section");
	let scrollTop;

	$(window).scroll(function () {
		scrollTop = $(this).scrollTop();
		animate(scrollTop);
	});

	const animate = (sct) => {
		/* 내장함수 정해진 자리 */
		/* array.forEach(element,index) 
      $(array).each(index,element)
    */
		sections.each((idx, el) => {
			/* el이 제이쿼리 객체로 반환되지 않고 일반태그로 반환되서 매번 반환값을 객체로 변환해야함
      idx를 .eq 메서드에 넣어서 작성함
      */
			let tg = sections.eq(idx);
			if (sct > tg.offset().top - gap) {
				tg.addClass("sectionIn");
			}
		});
	};
}
//jq();
