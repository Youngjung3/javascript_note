// id선택
var el1 = document.getElementById("one");
el1.style.background = "yellow";
var el2 = document.getElementsByTagName("li");
var el3 = document.getElementsByTagName("ul");
// console.log(el2);
for (let i = 0; i < el2.length / 2; i++) {
  el2[i].style.backgroundImage = "url(http://qwerew.cafe24.com/example/javascript/chicken.png)";
  el2[i].style.backgroundSize = "20px";
  el2[i].style.backgroundRepeat = "no-repeat";
}
/* for (let e of el3){
    e.style.background="skyblue"
}
 */
//클래스선택
var el4 = document.getElementsByClassName("highlight");
el4[1].style.cssText = "width:500px; margin:auto; background:pink;"; //css 속성 여러개-> 추가X 덮어쓰면서 수정

// querySelector
var el5 = document.querySelector(".highlight");
console.log(el5); //단일요소만 반환
el5.style.color = "red";
var el6 = document.querySelectorAll(".highlight");
for (var k = 0; k < el6.length; k++){
	el6[k].style.color = "orange";
};
for (a of el6){
    a.style.backgroundColor="black";
}
el6.forEach(function(b){
    b.style.fontSize="3em"
});