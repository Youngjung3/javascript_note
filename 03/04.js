// for(초기값; 조건식; 증감식){}
var i = 0;
// for(let i=0; i<5; i++){
//     document.write(`<br>${i}번째 반복입니다<br>`)
// }
// document.write(`<br>끝<br>`)

for (i = 6; i >= 1; i--) {
  // document.write(`<h${i}>h${i} 재미있는 자바스크립트</h${i}>`)
  document.write("<h" + i + ">h" + i + "재미있는 자바스크립트</h" + i + ">"); //익스호환
}
//구구단5단
for (i = 1; i <= 9; i++) {
  document.write(`<br>5X${i}=`, 5 * i);
}

i = 5;
for (let j = 1; j <= 9; j++) {
  let result = "<br>" + i + "x" + j + "=" + i * j + "<br>";
  document.write(result);
}


// 사용자로 부터 생년월일을 입력받아 나이를 계산하는 프로그램
let year = Number(prompt("생년을 입력해주세요", ""));
let result1 = 2022 - year;
document.write(result1);

//1~10까지 수에서 짝수끼리 더해서 출력하세요
var k;
var n = 10;
var sum = 0;
// 2<=10 //i(2)=i(1)+1
for (k = 1; k <= n; k++) {
  if (k % 2 === 1) {
    continue; //통과
  }
  console.log(k); //1,2,3,~10
//sum=sum+k; //밑에와 같다
  sum+=k;
  document.write("<hr>"+sum);
}
