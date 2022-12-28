// const h1=document.querySelector("h1")
// h1.style.color="red";
// h1.style.backgroundColor="yellow";
// h1.onclick=function(){
//     h1.style.backgroundColor="green";
// };
/* $("선택자").css({"color":"red","background-color":"yellow"}) - 제이쿼리 */

/* 조건문 */
var your_sex="여자";
document.write("당신은"+your_sex+"이므로");
//if(조건){조건이 참일때 실행}
if(your_sex=="남자"){
    document.write("반바지를 입으세요.");
}
if(your_sex=="여자"){
    document.write("긴바지를 입으세요.");
}

/* 현재 시간이 18시 이전이면 해를 출력하고 18시 이후면 달을 출력 */
let current=new Date();
let day_time=current.getHours();
if(day_time<18){
    document.write(`<img src="day.gif" style="display:block; margin:0 auto;">`)
}
if(day_time>=18){
    document.write(`<img src="night.gif" style="display:block; margin:0 auto; background-color:black;">`)
}

// 질의응답 창(prompt)을 이용하여 임의로 정한 변수에 시험 점수를 입력 받아 저장한 후 만일 70점보다 크거나 같으면 '합격'이라는 메시지를 출럭하시오

let num=Number(prompt("점수를 입력하세요", "0"));
if(num>=70){
    document.write(`합격`);
}
else{
    document.write(`불합격`);
    // 조건없음 if에 해당하지 않는 모든 경우
}
