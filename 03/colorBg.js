const color=['yellow', 'red', 'green', 'skyblue', 'darkred']
let i=0;

function colorBg(){
    let bodytag=document.getElementsByTagName("body")[0];
    bodytag.style.backgroundColor=color[i];
    i++;
    if(i >= color.length){
        i=0;
    }
}