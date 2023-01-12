const cursor = document.querySelector("#cursor");
const cStyle = window.getComputedStyle(cursor);
// console.log(cStyle.width.split("px","1"));
window.addEventListener("mousemove", function (event) {
  /* 마우스가 움직일때 포인터의 좌표값 얻기 
      얻어낸 좌표를 dom 요소에 할당
      */
  let cSize = [cStyle.width.split("px", "1"), cStyle.height.split("px", "1")];
  //    console.log(cSize);
  let pointer = event;
  let pP= [pointer.clientX,pointer.clientY];
  let pObj={
      x:pointer.clientX-150 + "px",
      y:pointer.clientY-150 + "px"
  }
  // console.log(pP,pObj.x,pObj.y);
  cursor.style.marginLeft = -(cSize[0] / 2) + "px";
  cursor.style.marginTop = -(cSize[1] / 2) + "px";
  cursor.style.left = pP[0] + "px";
  cursor.style.top = pP[1] + "px";

  const m1=document.querySelector("#m1")
  const m2=document.querySelector("#m2")
  const m3=document.querySelector("#m3")

  m1.style.left = pObj.x;
  m1.style.top = pObj.y;

  const txt = document.querySelector(".txt")
  txt.addEventListener("mouseover", function(){
    cursor.classList.add("on")
  })
  txt.addEventListener("mouseleave", function(){
    cursor.classList.remove("on").style("rotateY(0deg)")
  })
});