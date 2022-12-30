for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
document.write(`<hr>`)

let output='';
for(i=1; i<10; i++){
    for(let j=0; j<i; j++){
          output+="*"
    }
    output=output+"<br>"
}
document.write(output);
document.write(`<hr>`)


for (let i = 1; i <= 14; i++) {
  for (let j = 2; j <= i; j++) {
    document.write("**");
  }
  document.write("*<br>");
}
