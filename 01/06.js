//데이터형
//문자자료형 string
// let x;
// let y;
let x, y;
x = 7 + 5;
y = "7" + 5;
// document.write(x+y)
document.write(x); //12
document.write(y); //글자7글자5
document.write("<br>");
document.write("y"); //글자y
/* 자바스크립트에서 표현식을 작성할 때 문자는"" 변수나 숫자는 그냥 
자바스크립트에서는 태그도 문자열*/
//대상.함수() -> 메서드 -> 임자있는 함수
const wakeup = "밥먹고 학교가야지";
document.write('<h1 style="color:green">', wakeup, "</h1>");
document.write('<h1 style="color:darkblue">' + wakeup + "</h1>");

// es6에 추가된 템플릿 리터럴
document.write(`<h1 style="color:blue">${wakeup}</h1>`);