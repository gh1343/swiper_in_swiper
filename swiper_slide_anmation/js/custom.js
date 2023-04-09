$(document).ready(function(){


var swiper_img_slide = new Swiper(".img-slide", {
        touchRatio: 0,
        speed: 5000,
        loop: true,
        //loopedSlides: 10,
        slidesPerView: 5,
        //freemode: true,
        autoplay: {
            delay: 0, //add
            disableOnInteraction: true,
            //clickable: false,
        },
    
        //centeredSlides: false,
        //createElements: true,
        //allowTouchMove: true,
        //slidesPerView: 'auto',
        loopAdditionalSlides: 10,
        //allowTouchMove: false,
        //spaceBetween: 10,
        //preventClicks: true,
        //clickable: false,
        pauseOnMouseEnter: true,

  });
//   $('.img-slide .swiper-slide').on('mouseenter', function(){
//     swiper_img_slide.autoplay.stop()
// });
// $('.img-slide .swiper-slide').on('mouseleave', function(){
//     swiper_img_slide.autoplay.start()
// });
})