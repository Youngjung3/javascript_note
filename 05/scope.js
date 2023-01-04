// 1. 전역변수에 값을 담는다
// 2. 콘솔을 옮긴다
// 3. 리턴문에 sum 전달
// 4. 다른 함수에 인자로 전달
let sum="전역"; //전역 변수선언
function addNumber() {
    let sum = "지역"; //지역변수이므로 함수블록안에 갖혀서 실행안됨
    console.log(sum); //지역	
}
addNumber();
console.log(sum); //전역	