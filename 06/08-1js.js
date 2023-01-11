const section=document.querySelector("section");
let text=document.querySelector(".progress .txt");
let progressbar=document.querySelector(".progress>.bar");

const windowHeight=window.innerHeight;
let scrollTop;
// console.log(windowHeight);

window.addEventListener('scroll', function(){
    scrollTop=window.scrollY;
    // console.log(scrollTop);
    // scrollHeight=문서의 높이
    let scrollHeight=section.clientHeight;
    let scrollRealHeight=scrollHeight-windowHeight;
    let scrollPercent=(scrollTop/scrollRealHeight)*100;
    if(scrollPercent>=100){
        scrollPercent=100;
    }
    progressbar.style.width=Math.floor(scrollPercent)+"%";
    text.textContent=Math.floor(scrollPercent)+"%";
    // progressbar.style.height=Math.floor(scrollPercent)+"%";
    
})