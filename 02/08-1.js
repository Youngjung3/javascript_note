// let gender=prompt("당신의 성별은", "");
// let age=prompt("당신의 나이는", "");
// age=Number(age);
// console.log(typeof(age));
// let result=age>=20 && age<30 && gender=="여성";
// document.write(gender, age, result);
/* prompt 함수로 반환되는 값은 string 이므로 계산식을 사용해야 할 경우 자료형을 변환해야 한다. */


// prompt 메서드를 활용하여 국어, 영어, 수학 점수를 입력 받으세요.
// 평균이 70점 이상이고 각 과목별 점수가 60점 이상이면 true를 아니라면 false를 출력합니다.

// let x=prompt("국어점수는", "");
// let y=prompt("영어점수는", "");
// let z=prompt("수학점수는", "");
// let avg=(x+y+z)/3;
// let result=avg>=70 && x>=60 && y>=60 && z>=60;
// document.write(`총점은`, `${result}`,`입니다`);

// let kor=Number(prompt("국어점수는?","0"));
// let eng=Number(prompt("영어점수는?","0"));
// let math=Number(prompt("수학점수는?","0"));
// let avg=(kor+eng+math)/3;
// let result=avg>=70 && kor>=60 && eng>=60 && math>=60;
// document.write(`<h2>${result}</h2>`);


// 방문자에게 질의응답 창(prompt)을 이용하여 신장과 몸무게를 입력받아 옵니다.
// 방문자의 몸무게가 적정 몸무게보다 이상일 경우 "적정 몸무게 이상", 미만일 경우에는 "적정 몸무게 미달"로 출력되도록 하세요.
// 적정 몸무게 공식은 '몸무게=(신장-100)*0.9'입니다

// let height=Number(prompt("당신의 신장은?","0"));
// let weight=Number(prompt("당신의 체중은?","0"));
// let bmi=(height-100)*0.9;
// let result2=weight>bmi?"적정 몸무게 이상":"적정 몸무게 미달";
// alert(result2);
// document.write(`${result2}`);

/* 
사용자로부터 cm을 입력받아 inch로 변환하여 출렿하는 단위 변환기를 만드세요
cm * 0.393701 */

// let x=Number(prompt("cm을 입력하세요", "0"));
// let y=x*0.393701;
// document.write(`${y}inch입니다`);

const rawInput=prompt(`cm단위의 숫자를 입력하세요`);
const inch=Number(rawInput)*0.393701;
alert(`${inch}inch입니다`);
