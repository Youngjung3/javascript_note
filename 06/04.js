/* JS */
/* let list1=document.querySelectorAll("#list1>li");
list1.forEach(function(el,idx){
  console.log(el,idx);
  el.classList.add("a"+idx)
  el.textContent="aaa"+idx;
})
let list2=document.querySelector(".theObj");
list2.innerHTML="<span>"+ Math.random() +"</span>"
list2.setAttribute("data-role","accessbillity");
let list22=list2.getAttribute("class");
console.log(list22);
list2.nextElementSibling.textContent=list22;
// list2.innerHTML="<span>"+ list22 +"</span>"

let list3=document.querySelector("#list3")
list3.innerHTML+="<li>πΉμΆκ°ν list6</li>"
// afterbegin λ΄λΆμμ κ°μ₯ μ²«μ§Έ
list3.insertAdjacentHTML("afterbegin","<li>πΉμΆκ°ν list6</li>");
// beforeend λ΄λΆμμ κ°μ₯ λ§λ΄
list3.insertAdjacentHTML("beforeend","<li>π‘μΆκ°ν list6</li>");
// brforebegin λ°λ‘ μμ
list3.insertAdjacentHTML("beforebegin","<div>π©μΆκ°ν div</div>");
// afterend λ°λ‘ λ€μ
list3.insertAdjacentHTML("afterend","<div>π§¨μΆκ°ν div</div>");

let list3Li=document.querySelectorAll("#list3 li");
list3Li[4].insertAdjacentHTML("beforebegin","<li>π¨λ£μ΄λ³΄μΈμ</li>"); */


/* jQ */
$(() => {
    let list1 = $("#list1>li");
    console.log(list1);
    
      list1.each(function (idx,el) {
          $(el).addClass("a" + idx).text("aaa" + idx);
      });

      let list2=$(".theObj");
      list2.html("<span>"+ Math.random() +"</span>");
      list2.attr("date-role","accessbillity");
      // νκ°λ κ°μ Έμ
      //νκ° μμ μμ±μ μ°λ©΄ κ·Έ μμ±μ κ°μ Έμ΄
      //λκ° μ°λ©΄ κ΅μ²΄
      list2.attr("class","abcd")
      let list22=list2.attr("class");
      console.log(list22);
      list2.next().text(list22);
      list2.html("<span>"+ list22 +"</span>");
      
      let list3=$("#list3");
      list3.append("<li>πΉμΆκ°ν list6</li>");
      list3.prepend("<li>π¨μΆκ°ν list6</li>");
      let list33=$("#list3 li");
      list33.eq(4).before("<li>π‘μΆκ°ν list6</li>");
      list33.eq(4).after("<li>π©μΆκ°ν list6</li>");
  
  });//jQuery
