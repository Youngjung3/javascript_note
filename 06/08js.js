// section 변수에 담기
const section=document.querySelector('section');
// 변수에 담아야 할 것들
const text=document.querySelector('.txt');
const progressbar=document.querySelector('.bar');
// 창높이
const windowHeight=window.innerHeight;
// 스크롤양을 담을 변수
let scrollTop;

window.addEventListener('scroll',function(){
    scrollTop=window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
    // console.log(scrollTop);
    /* 퍼센트구하기
        1. 화면높이 windowHeight
        2. 문서총높이 scrollHeight 변수로 선언 후 ???.clienHeight//패딩을 포함한 높이
        3. scrollRealHeight=2 - 1    
    */
   let scrollHeight=section.clientHeight;
    // console.log(scrollHeight);
   let scrollRealHeight=scrollHeight-windowHeight;
    /* 퍼센트로 바꾸기 부분sct/전체 *100 */
    let scrollPercent=(scrollTop/scrollRealHeight)*100;
    console.log(Math.floor(scrollPercent));
    text.textContent=Math.floor(scrollPercent)+"%";
    progressbar.style.width=Math.floor(scrollPercent)+"%";
});