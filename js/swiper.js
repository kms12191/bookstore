// #silder swiper
var slider_swiper = new Swiper(".sliderSwiper", {
    rewind: true,
    navigation: {
        nextEl: "#slider .swiper-button-next",
        prevEl: "#slider .swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
        el: "#slider .swiper-pagination",
    },
});


//new swiper
var new_swiper = new Swiper(".newSwiper", {
    slidesPerView: 5,
    rewind: true,
    spaceBetween: 20,
    pagination: {
        el: "#new .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#new .swiper-button-next",
        prevEl: "#new .swiper-button-prev",
    }
});