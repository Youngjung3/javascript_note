/* 변수의 유효범위: scope */
let total = ""; //전역변수
let sum = (a, b) => {
  //let total = a + b; //새 그릇을 준비(지역변수)
  //let total  //같은 지역에서 같은 이름 안됨
  total = a + b; //원래 그릇에 재할당
};
sum(10, 20);
document.write("두수의 합 " + total);

/* return문의 역할1 */
let sum1 = (a, b) => {
  return a + b;
};
document.write("<hr>두수의 합 " + sum1(15, 20));

/* return은 안써도 들어있다 
    return에 값을 작성하지 않아도 undefined를 반환함 
*/
(function () {
  console.log(`hello`);
})();