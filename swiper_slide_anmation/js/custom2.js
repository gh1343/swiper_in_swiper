$(document).ready(function(){



    $('.slide').on('mouseenter', function(){
        $('.wraping').css('animation','30s linear 0s infinite normal none paused bannermove');
        $(this).css({'transform':'translateY(-30px)','transition':'0.3s'});
    });
    $('.slide').on('mouseleave', function(){
        $('.wraping').css('animation','30s linear 0s infinite normal none running bannermove');
        $(this).css({'transform':'translateY(0px)','transition':'0.3s'});
    });


    var recommand_slideWrap = new Swiper('.foundJob_slideWrap', {
        autoplay: {
        delay: 3000, //add
        disableOnInteraction: false,
        },
        
        //speed: 5000,
        loop: true,
        variableWidth: true,
        loopAdditionalSlides: 1,
        slidesPerView: 5,
        slidesPerGroup : 5,
        pagination: {
        el: '.scroll_bar',
        type: 'progressbar',
        draggable: false,
        },
        navigation: {
        prevEl: '.foundJob_slideWrap .prev',
        nextEl: '.foundJob_slideWrap .next',
        clickable: true,
    },
    });

    $('.foundJob_slideWrap .swiper-slide').on('mouseenter', function(){
        recommand_slideWrap.autoplay.stop();
        $(this).css({'transform':'translateY(-30px)','transition':'0.3s'});
    });
    $('.foundJob_slideWrap .swiper-slide').on('mouseleave', function(){
        recommand_slideWrap.autoplay.start();
        $(this).css({'transform':'translateY(0px)','transition':'0.3s'});
    });



    // var swiper_profess_wrap = new Swiper('.profess_wrap', {
    //     // autoplay: {
    //     // delay: 3000, //add
    //     // disableOnInteraction: false,
    //     // },
        
    //     //speed: 5000,
    //     loop: true,
    //     variableWidth: true,
    //     loopAdditionalSlides: 1,
    //     slidesPerView: 2,
    //     slidesPerGroup : 2,
    //     navigation: {
    //     prevEl: '.profess_wrap .prev',
    //     nextEl: '.profess_wrap .next',
    //     clickable: true,
    // },
    // });

    var txt_wrap = new Swiper('.txt_wrap', {
        direction: "vertical",
        centeredSlides : true,
        loop : true,
        slidesPerView: 'auto',

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        //speed: 1000,

    });

    swiper_profess_wrap.controller.control = txt_wrap;
     txt_wrap.controller.control = swiper_profess_wrap;
    


    //  $('.profess_wrap .swiper-slide').on('mouseenter', function(){
    //     $(this).find('.txt').css('animation','10s linear 0s infinite normal none running playhugi ');
        
    // });
    // $('.profess_wrap .swiper-slide').on('mouseleave', function(){
    //   $(this).find('.txt').css('animation','10s linear 0s infinite normal none paused playhugi ');
       
    //  });

   
});
// $('.count-number').counterUp({
//     delay: 20,
//     time: 2000
// });


