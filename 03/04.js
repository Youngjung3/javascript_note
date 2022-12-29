// for(초기값; 조건식; 증감식){}
var i=0;
// for(let i=0; i<5; i++){
//     document.write(`<br>${i}번째 반복입니다<br>`)
// }
// document.write(`<br>끝<br>`)

for(i=6; i>=1; i--){
    // document.write(`<h${i}>h${i} 재미있는 자바스크립트</h${i}>`)
    document.write("<h"+i+">h"+i+"재미있는 자바스크립트</h"+i+">") //익스호환
}
//구구단5단
for(i=1; i<=9; i++){
    document.write(`<br>5X${i}=`, 5*i);
}

i=5;
for(let j=1; j<=9; j++){
    let result="<br>"+i+"x"+j+"="+i*j+"<br>";
    document.write(result);
}

for(let i=1; i<=9; i++){
    for(let j=1; j<=i; j++){
    document.write("*")
}
    document.write("<br>")
}

for(let i=1; i<=14; i++){
    for(let j=2; j<=i; j++){
    document.write("**")
}
    document.write("*<br>")
}

// 사용자로 부터 생년월일을 입력받아 나이를 계산하는 프로그램
let year=Number(prompt("생년을 입력해주세요",""));
let date=Number(prompt("월일을 입력해주세요",""));
let result1=2022-year;
let result2=1229-year;
document.write(result1);

