let scroll_tl=gsap.timeline({
    scrollTrigger:{
        trigger:".factsContainer", // 트리거할 요소명
        // markers:true,
        markers:false,
        start:"top center",
        end:"+=300",
        scrub:true,
    }
})
let facts=document.querySelectorAll('.fact');
scroll_tl.to('.factsContainer h2',{
    scale:1.2,
    duration:1,
    ease:'slow'
})
scroll_tl.to(facts,{
    xPercent:-85*(facts.length-1),
    scrollTrigger:{
        trigger:'.factsContainer_sm',
        start:'center center',
        pin:true,
        scrub:1,
        snap:1/(facts.length-1),
        // end:()=> `+=${facts.length-1}`
        end:()=> `+=4320`
    }
})