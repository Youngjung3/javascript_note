/* switch */
/* 조건 case : */

let day = "월";
day = "일";
document.write(day + "요일에는");
switch (day) {
  case "월":
    document.write("오전 10시 수업시작");
    break;
  case "화":
    document.write("<br>오후 2시 수업시작");
    break;
  case "수":
    document.write("<br>오후 4시 수업시작");
    break;
  case "목":
    document.write("<br>오전 10시 수업시작");
    break;
  case "금":
    document.write("<br>오전 11시 수업시작");
    break;
  default:
    document.write("<br>월요일에서 금요일까지만 입력하세요");
}

/* 사용자로 부터 숫자를 입력받아 짝수인지 홀수 인지 숫자가 아닌지를 출력하시오 */

// let x=Number(prompt("숫자를 입력하세요", "숫자"))
// switch(x){
//     case Number(odd) : document.write("홀");
//     case Number(even) : document.write("짝");
//     default : document.write("숫자가 아닙니다");
// }

// const input=Number(prompt("숫자를 입력하세요", "숫자"))
// // 나머지가 0 false 나머지가 1 true
// // switch(input%2){
// //     case 0 :alert("짝수입니다")
// //     break;
// //     case 1 :alert("홀수입니다")
// //     break;
// //     default : alert("숫자가 아닙니다")
// // };
// if(input%2==1){
//     alert("홀수");
// }
// else if(input%2==0){
//     alert("짝수");
// }
// else{
//     alert("숫자를 입력하세요");
// }

/***
 *두수의 크기비교
 *
 */

// let num1 = Number(prompt("첫번째 숫자를 입력하세요", "숫자"));
// let num2 = Number(prompt("두번째 숫자를 입력하세요", "숫자"));
// if (num1 > num2) {
//   alert("첫번째 숫자가 더 큽니다");
// }
// else if (num2 > num1) {
//   alert("2번째 숫자가 더 큽니다");
// }
// else if (num1 === num2) {
//   alert("숫자가 같습니다");
// }
// else {
//   alert("숫자가 아닙니다");
// }

// const a=Number(prompt("첫번째 숫자", ""));
// const b=Number(prompt("두번째 숫자", ""));
// if(a>b){ //두번째가 더 큰경우, 두 수가 같은경우
//     alert("첫번째 숫자가 더 큽니다");
// }else if(a==b){
//     alert("두 수가 같습니다");
// }
// else{
//     alert("두번째 숫자가 더 큽니다");
// }

/***
 * 3의 배수확인
 *
 * */

let userNum = prompt("숫자를 입력하세요");
//3의 배수인지를 확인하여 결과를 alert로 출력

//userNum==null 사용자가 아무것도 입력안한경우
// if (userNum !== null) { //사용자가 입력한 경우
//   if (userNum % 3 == 0) {
//     alert("3의 배수입니다.");
//   } else {
//     alert("3의 배수가 아닙니다");
//   }
// }
// else{
//     alert("입력이 취소 되었습니다.");
// }
// console.log(userNum);

// switch(userNum%3){
//     case 0 : alert("3의 배수입니다");
//     break;
//     case 1 : alert("3의 배수가 아닙니다");
//     break;
//     case 2 : alert("3의 배수가 아닙니다");
//     break;
//     default : alert("null");
//     break;
// }
if (userNum !== null){
    (userNum%3===0)?alert("3의배수"):alert("3의배수X");
}else{
    alert("입력이 취소되었습니다");
}

