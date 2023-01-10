// 상수 textZone 에 #textZone을 할당하세요
const textZone=document.querySelector("#textZone");
// #btn1 클릭시textZone의 글씨색을 변경
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");

btn1.onclick=function(){
    textZone.style.color="blue";
    // 클릭시 textZone에 클래스 blue 추가
    textZone.classList.add("blue");
}

/* #btn2 마우스 오버시 #textZone 배경 노랑으로 변경*/
btn2.onmouseover=function(){
    textZone.style.backgroundColor="yellow";
}
// btn2.onmouseleave=function(){
//     textZone.style.backgroundColor="#fff";
// }

/* btn2포커스 발생시 textzone 배경색 노랑으로 onfocus*/
btn2.onfocus=function(){
    textZone.style.backgroundColor="yellow";
}

/* btn3에 이벤트 여러개 등록 */

function textZone4(){
    textZone.style.color="green";
    textZone.style.fontSize="2em";
    textZone.style.backgroundColor="darkyellow";
}
/* 
btn3.onmouseover=textZone4;
// property listener로 이벤트 등록시 같은 이벤트 등록시 동일한 이벤트는 덮어씌워짐
btn3.onfocus=textZone4;
btn3.onclick=function(){alert("click")}
btn3.onclick=function(){
    textZone.style.marginLeft="80px";
} */
btn3.addEventListener('click',function(){
    alert("click");
})
btn3.addEventListener('click',function(){
    textZone.style.marginLeft="80px";
})
const listWrap=document.querySelector("#listWrap");
const list1=document.querySelector(".list1");
listWrap.addEventListener("mouseenter",function(){
    list1.style.display="block";
})
listWrap.addEventListener("mouseleave",function(){
    list1.style.display="none";
})

let hover=document.querySelector(".hover");

/* 
hover.addEventListener("mouseenter",function(){
    this.style.color="aqua";
});
hover.addEventListener("mouseleave",function(){
    this.style.color="red";
}); 
*/
/* hover.addEventListener("mouseenter",function(){
    console.log(this);
    this.style.color="aqua";
}); */
hover.addEventListener("mouseenter", ()=>{
    // 이벤트를 화살표 함수로 작성시 this는 객체 자식이 아닌 윈도우를 가르킴 
    console.log(this);
    this.style.color="aqua";
});
// 마우스가 hover 에 진입시 글씨색을 aqua
// 마우스가 hover 에 벗어날시 글씨색을 red