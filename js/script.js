let viewport = $(document).width();
$(document).ready(function () {

});

$('.btn').click(function(evt) {
  evt.preventDefault();
  $('.pop-up').fadeIn();
});

$('.pop-up__btn-close').click(function() {
  $(this).parent().fadeOut();
});

$(document).keydown(function(evt) {
  if (evt.keyCode == 27) {
    if( $('.pop-up').length > 0) {
      $('.pop-up').fadeOut();
    }
  }
});

$('.staff__more').click(function() {
  $(this).parent().find('.staff__dscr').toggleClass('staff__dscr--active');
});

$('.start-scree__slider-wrapper').slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000
});

$('.reviews__slider').slick({
  arrows: true,
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      }
    },
  ]
});

$('.prices-info__doctor-btn').click(function() {
  $('.prices-info__doctor-btn--active').removeClass('prices-info__doctor-btn--active');
  $(this).addClass('prices-info__doctor-btn--active');
  // заголовок
  $('.title-shadow--mod .title-shadow__title-text').fadeOut(0).text('').append($(this).text());
  $('.title-shadow--mod .title-shadow__title-text').fadeIn(200);
  $('.title-shadow--mod .title-shadow__shadow-text').fadeOut(0).text('').append($(this).text());
  $('.title-shadow--mod .title-shadow__shadow-text').fadeIn(300);
  // переключение вкладок с ценой
  let doctor = $(this).data('doctor');
  $('.prices-info__list-item--active').fadeOut(0);
  $('.prices-info__list-item--active').removeClass('prices-info__list-item--active');
  $('.' + doctor).fadeIn(300);
  $('.' + doctor).addClass('prices-info__list-item--active');
});

$('.header__mobile-btn').click(function() {
  $(this).toggleClass('header__mobile-btn--close');
});

$('.header__mobile-btn').click(function() {
  $('.header__nav').slideToggle(300);
});
