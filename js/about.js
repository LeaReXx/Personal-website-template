const swiper = new Swiper('.feedback-swiper', {
    slidesPerView: 1,
    speed: 1000,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 20
        },
    }

});

const swiper2 = new Swiper('.customers-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        400: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        500: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        800: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }

});
