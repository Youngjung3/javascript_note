/* 삼항연산자:항이 3개
조건?참일때:거짓일때
*/
// let your="어려워요";
// let study=(your=="어려워요")?"천재이시군요":"복습하세요";
// document.write(`자바스크립트가 ${your} <h1>${study}</h1>`);

/* 미션03 */
/***
*지출내역 - 교통비:3000 식비: 7000 음료:2000
*일일한다 - 10000
*초과시 금액출력 그렇지 않을경우 참잘했어요 출력
*/ 
const price1=3000; //교통비
const price2=7000; //식비
const price3=2000; //음료
const total=price1+price2+price3;
// console.log(price1, price2, price3, total);
const result=total>10000? total-10000+"원 초과" : "참 잘했어요"
document.write(result);
