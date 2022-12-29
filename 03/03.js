const item=["사과", "배", "한라봉", "바나나"];
document.write(`원래 배열 : ${item} <br>`);
/* 인덱스번호로 제거 splice(시작할 인덱스번호, 삭제할 요소의 갯수)  */
item.splice(2,1)
document.write(`바뀐 배열 : ${item} <br>`);

const animals=['강아지', '고양이', '보노보노', '곰'];
document.write(`<p> ${animals} </p>`);
/* indexof() 값이 있으면 index번호를 없으면 -1을 반환하는 함수 */
const index=animals.indexOf('보노보노');
console.log(index)
animals.splice(index,1)
document.write(`<p> ${animals} </p>`);
// 스폰지밥을 마지막 배열로 추가 후 출력
// animals[animals.length]=("스폰지밥");
animals.splice(animals.length,0,'스폰지밥')
document.write(`<p> ${animals} </p>`);
document.write(`<p>새로운 동물은 ${animals[3]} 입니다</p>`);