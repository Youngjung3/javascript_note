/* 자리배치도 */
/* 총입장객과 한줄에 앉을 인원을 입력받아 좌석배치도를 출력하는 프로그램을 만드시오 */
var memNum=Number(prompt("입장객은 몇명인가요?",""));
var colNum=Number(prompt("한 줄에 몇밍씩 앉습니까?","")); //colNum -td

if(memNum%colNum===0){
    // rowNum -tr
    rowNum=parseInt(memNum/colNum);
}else{
    rowNum=parseInt(memNum/colNum) +1;
}
document.write("모두"+rowNum+"개의 줄이 필요합니다");
