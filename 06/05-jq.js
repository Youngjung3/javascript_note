const textZone=$("#textZone");
const btn1=$("#btn1");
const btn2=$("#btn2");
const btn3=$("#btn3");

btn1.click(function(){
    textZone.css("color","blue");
})
// method channing
btn2.mouseover(function(){
    textZone.css("backgroundColor","yellow");
}).focus(function(){
    textZone.css("backgroundColor","yellow");
});
// 두개이상의 이벤트연결 (이벤트 바운딩)
/* //다른이벤트에 같은 실행문 적용
btn3.on("mouseover focus",function(){
    textZone.css("backgroundColor","red");
    textZone.css("color","red");
}) */
//이벤트도 다르고 실행문도 다름
btn3.on({
    "mouseover focus":function(){
    textZone.css("backgroundColor","red");
    textZone.css("color","red");
    },
    "click":function(){
        alert("click");
        textZone.css("marginLeft","80px")
    }
});
$("#listWrap").hover(
    function(){
        $(".list1").css("display","block");
        $(this).css("backgroundColor","skyblue");
    },
    function(){
        $(".list1").css("display","none");
        $(this).css("backgroundColor","blue");
    }
    );
