if ($(".main-slider").length > 0) {
  let swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 35,

    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    // },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  $(".main-slider__btn-next").click(function () {
    swiper.slideNext();
  });
  $(".main-slider__btn-prev").click(function () {
    swiper.slidePrev();
  });
}

if ($(".tax-issues-slider__swiper").length > 0) {
  let swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 34,

    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    // },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  $(".tax-issues-slider__btn-next").click(function () {
    swiper.slideNext();
  });
  $(".tax-issues-slider__btn-prev").click(function () {
    swiper.slidePrev();
  });
}

$(function () {
  $(".tax-issues__up").on("click", function (event) {
    event.preventDefault();
    $("body,html").animate({ scrollTop: 0 }, 400);
  });
});
