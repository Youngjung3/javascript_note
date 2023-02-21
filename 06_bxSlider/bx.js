$(document).ready(function(){
    $('.bxslider').bxSlider({
      mode:'horizontal',
      speed:500,
      captions:true,
      controls:true,
      nextText:'😍<i class="fa-solid fa-arrow-right"></i>',
      prevText:'<i class="fa-solid fa-arrow-left"></i>😍',
      auto:true, //autoplay가 안되면
      autoControls:true, //autoControls도 안됨
      startText:'⩥',
      stopText:'▣',
    });
    $('.videoSlider').bxSlider({
        video:true,
        auto:true,
        onSliderLoad:function(currentIndex){
            console.log(currentIndex);
            $('.videoSlider div').eq(currentIndex+1).find('video').get(0).play();
        },
        onSlideAfter:function($slideElement,oldIndex,newIndex){
            // console.log($slideElement,oldIndex,newIndex);
            $slideElement.siblings().find('video').get(0).pause();
            $slideElement.find('video').get(0).play();
        },
    })
    $('.active').bxSlider({
        auto:true,
        // 열자마자최초
        onSliderLoad:function(currentIndex){
            // console.log(currentIndex);
            $('.active li').eq(currentIndex+1).addClass('active');
        },
        onSlideAfter:function($slideElement,oldIndex,newIndex){
            console.log($slideElement);
            $slideElement.addClass('active').siblings().removeClass('active');
        },
    })
  });