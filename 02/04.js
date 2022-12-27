let x=1;
// 후위연산 x++
document.write(x++);//x=x+1 //1(2)=1+1
document.write('<br>');
document.write(x); //2
document.write('<br>');
document.write(x++); //2(3)
document.write(`<br>`);
document.write(x); //3
document.write('<br>');
document.write(x++); //3(4)
document.write(`<br>`);
document.write(x); //4
document.write('<br>');
document.write(x++); //4(5)
document.write(`<br>`);
document.write(x); //5
document.write('<br>');

// 전위연산
x=1;
document.write(`<hr>`,++x);//2
document.write(`<br>`,++x);//3=2+1
document.write(`<br>`,++x);//4
document.write(`<br>`,++x);//5
document.write(`<hr>`,x++);//5(6)
document.write(`<br>`,x,`<hr>`);

let y=1;
document.write(`<h1>${y--}${y}${--y}</h1>`) //y=y-1 // 1=1-1(0)
// document.write(`<h1>${y}</h1>`)