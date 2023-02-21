/* 1단계: 스크롤양 확인하기 */
/* 3단계: 스크롤양이 gap보다 크면 nav에 .sticky 추가 */
const gap = 500;
function js() {
  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("nav");
  const gnb = nav.querySelectorAll(".gnb>li");
  const sgnb = document.querySelectorAll(".sideNav>li");

  function removeON(obj){
	obj.forEach((o) => {
		o.classList.remove("on");
	  });
  }
  function smooth(el){
	e.preventDefault();
	document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  }
  let scrollTop;
  window.addEventListener("scroll", function () {
    scrollTop = window.scrollY;
    animate(scrollTop);
  });

  const animate = (sct) => {
    //sections
    sections.forEach((el, idx) => {
      // idx:"0,1,2,3,4,5,6,7,8
      // gnb[idx]
      let sectionTop = el.offsetTop;
      if (sct > sectionTop - gap) {
        gsap.to(el, { backgroundColor: "#8f45d1" });
        // gnb[idx].classList.remove("on");
        // gnb[idx].classList.add("on");
		removeON(gnb);
/*         gnb.forEach((obj) => {
          obj.classList.remove("on");
        }); */
		removeON(sgnb);
/*         sgnb.forEach((obj) => {
          obj.classList.remove("on");
        }); */
        gnb[idx].classList.add("on");
        sgnb[idx].classList.add("on");
        // el.classList.add("sectionIn");
      }
    });
    // 조건변경 -> nav의 높이만큼 스크롤양이 내려오면 sticky
    // 요소의 높이얻기 element.clientHeight
    // console.log(nav.clientHeight);
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
      document
        .querySelector(el.firstChild.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
		removeON(gnb);
/*       gnb.forEach((obj) => {
        obj.classList.remove("on");
      }); */
      el.classList.add("on");
    });
  });
  sgnb.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(el.firstChild.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
		removeON(gnb);
/*       sgnb.forEach((obj) => {
        obj.classList.remove("on");
      }); */
      el.classList.add("on");
    });
  });
}
js();
