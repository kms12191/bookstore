// #silder swiper
var silder_swiper = new Swiper(".silderSwiper", {
    rewind: true,
    navigation: {
        nextEl: "#silder .swiper-button-next",
        prevEl: "#silder .swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: "#silder .swiper-pagination",
    },
});


//new swiper
var new_swiper = new Swiper(".newSwiper", {
    slidesPerView: 5,
    rewind: true,
    spaceBetween: 20,
    pagination: {
        el: "#new .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#new .swiper-button-next",
        prevEl: "#new .swiper-button-prev",
    },
    slidesPerGroup: 3
});