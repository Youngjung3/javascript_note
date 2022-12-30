var i=1;
while(i<=10){
    document.write(i+"<br>");
    i++
}

/**
 * while로 구구단 5단 만들기
 * ** */
var j=1;
while(j<=9){
    document.write("5X"+j+"="+j*5+`<br>`);
    j++;
}

/**
 * do while
 * 1부터 10까지의 합
 * ** */
let x=0;
let total=0;
do{
    x++;
    // total=total+x;
    total+=x;
    document.write(x);
    if(x!=100) document.write("+");
}while(x<100);
document.write("<br>="+total);
