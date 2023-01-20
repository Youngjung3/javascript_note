addEventListener("DOMContentLoaded", () => {
    //load.html 요소를 변수에 할당
    let book1=document.querySelector("#book1");
    let book2=document.querySelector("#book2");
    // 데이터파일의 경로를 변수에 할당
    const url="./book.html";
    // XMLHttpRequest 객체를 생성
    let request=new XMLHttpRequest();
    // 서버에 요청프로그램작성
    request.open("GET",url);
    request.responseType="document"

    request.onload=()=>{
        let doc=request.responseXML;
        let ids=doc.querySelectorAll("[id]");
        book1.innerHTML=ids[0].innerText;
        book2.innerHTML=ids[1].innerText;
    }
    request.send();
  })