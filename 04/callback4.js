/* forEach : 배열의 요소를 콜백함수를 활용하여 반복순환 */
const arr = [273, 55, 5798, 15611, 565, 66];
arr.forEach(function (value, index, array) {
  console.log(value, index, array);
});
/* filter : 원하는 값만 골라보기 */
let words = ["스폰지밥", "뚱이", "다람이"];
const result = words.filter(function (value, index, array) {
  console.log(value);
  return value.length >= 3;
});
console.log(result);

/* map : 배열의 값을 새 값과 연결해서 새 배열로 저장 */
words = words.map(function (value, index,arr) {
  return value + "💚💙💜";
});
document.write(words[0]);

/* filter를 사용하여 arr배열에서 짝수만 출력해보세요 */
const even=arr.filter(function(a){
    console.log(a);
    return a%2==0;
})
document.write("<br>"+even);