/* 배열의 선언1 - 빈배열을 선언 후 값 할당 */
let str=[];
// 자바스크립트는 문자형을 배열로 다룸
str='선문아그만자';
// document.write(str);
// document.write(str[1]+str[1]);
document.write(str[0]+str[1]+str[2]+str[str.length-1]+'<hr>');
// 배열의 총길이
document.write(str.length);
console.log(str);

/* 2-배열의 생성 */
const arr=[];
arr[1]='우';
arr[0]='영';
// arr[2]='우';
// console.log(arr);
// document.write('<hr>'+arr[1]+arr[0]+str[2]+str[3]+str[4]+str[5])
const arr1=[273, 'String', true, function(){},{},[273,106]];
console.log(arr1);
const arr2=[,,,]
arr2[1]="망";
console.log(arr2);

/* 3-배열생성 */
const arr3= new Array(1,2,3);
console.log(arr3,length);
console.log(arr3[arr3.length-2+1]);
const arr4= new Array(3);
console.log(arr4);

// 화면에 fruits의 총길이를 출력하세요
const fruits=['배','사과','키위','바나나'];
fruits[4]='소세지'
document.write('<hr>',fruits.length,"개");
document.write("<hr>준호의 뱃속에 들어있는 2번째 과일은 "+fruits[1]+"입니다");
document.write("<hr>준호는 오늘 "+fruits+"를 먹었습니다 <br> 그중 제일 맛있었던 것은 "+fruits[3]+"입니다");
