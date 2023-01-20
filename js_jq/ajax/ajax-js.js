// ajax 통신을 가능하게 하는 객체
let request=new XMLHttpRequest();
//데이터 주소 설정
const url='./MOCK_DATA.json';
//데이터형식설정
//비동기방식이기 때문에 상태 값에 따라 수행됨
//console.log(request.readyState);// 0

//바뀐 요청 값을 얻을때는 onreadystatechange 속성의 readyState메서드를 활용 
//문법은 아래와 같다
request.onreadystatechange=function(){
    if(request.readyState==4 && request.status==200){
        //console.log(request.readyState); // 4
        // console.log(this.responseText);
        jsonfunc(this.responseText);
    }
}
request.open("GET",url);
request.send();
//네트워크 통신으로 db 받기
//받은 DB를 가공해서 화면에 바인딩
function jsonfunc(responseText){
    // console.log(responseText);
    let id=new Array();
    let first_name=new Array();
    let last_name=new Array();
    let email=new Array();
    let gender=new Array();
    let ip_address=new Array();

    //json 데이터를 text로 변환
    let jsonTxt=JSON.parse(responseText);
    // console.log(jsonTxt);
    // dom 요소 준비
    const wrap=document.querySelector(".wrap");
    // table 태그생성 .createElement
    let table=document.createElement("table");
    // 반복문 사용해서 데이터 바인딩
    for(let i=0; i<jsonTxt.length; i++){
        id[i]=jsonTxt[i].id;
        first_name[i]=jsonTxt[i].first_name;
        last_name[i]=jsonTxt[i].last_name;
        email[i]=jsonTxt[i].email;
        gender[i]=jsonTxt[i].gender;
        ip_address[i]=jsonTxt[i].ip_address;
        // console.log(id[i]);
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        td1.appendChild(document.createTextNode(id[i]+""));
        td2.appendChild(document.createTextNode(first_name[i]+""));
        td3.appendChild(document.createTextNode(last_name[i]+""));
        td4.appendChild(document.createTextNode(email[i]+""));
        td5.appendChild(document.createTextNode(gender[i]+""));
        td6.appendChild(document.createTextNode(ip_address[i]+""));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        table.appendChild(tr);
    }
    wrap.appendChild(table);
}