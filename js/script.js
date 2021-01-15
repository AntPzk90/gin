let reviewsSwiper = new Swiper('.main-slider__container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$('.header__burger').click(function() {
  $(this).toggleClass('header__burger--active');
  $('.bottom-nav__list').slideToggle(150).css('display', 'flex');
  if(window.matchMedia("screen and (max-width: 768px)").matches) {
    $('.main-nav:not(.main-nav--footer)').slideToggle(150).css('display', 'flex');
  }
});


