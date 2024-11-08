document.addEventListener('DOMContentLoaded',function(){
    new Swiper(".mySwiper", {
        cssMode: true,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 8000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    new Swiper(".secondSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,        

        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            768:{
                slidesPerView: 2,
                spaceBetween: 20,        
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 42,        
            },

        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });

});