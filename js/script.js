let reviewsSwiper = new Swiper('.main-slider__container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(document).ready(function() {
  $('.js-example-basic-single').select2();
});

$('.header__burger').click(function() {
  $(this).toggleClass('header__burger--active');
  $('.bottom-nav__list').slideToggle(150).css('display', 'flex');
  if(window.matchMedia("screen and (max-width: 768px)").matches) {
    $('.main-nav:not(.main-nav--footer)').slideToggle(150).css('display', 'flex');
  }
});

$('.catalog__slider').slider({
  range: true,
  min: $('#min').data('min'),
  max: $('#max').data('max'),
  step: 1,
  values: [$('#min').data('min'), $('#max').data('max')],
  slide: function (event, ui) {
    $('#min').attr('value', ui.values[0]);
    autoInputWidth($('#min'));
    $('#max').attr('value', ui.values[1]);
    autoInputWidth($('#max'));
  },
});

function autoInputWidth(element) {
  let buffer = element.parent().find('.catalog__form-input-buffer');
  buffer.text(element.val());
  element.width(buffer.width() + 10);
}

if ($('.catalog__select').length > 0) {
  $(document).ready(function () {
    $('.catalog__select').select2({
      placeholder: 'Самые популярные',
      minimumResultsForSearch: -1,
    });
  });
}

if (window.matchMedia('(max-width: 1024px)').matches) {
  $('.catalog__filters-btn-close').click(function() {
    $(this).parent().fadeOut(200);
    $('.overlay').remove();
    $('body').removeAttr('style');
  });

  $('.catalog__filters-btn').click(function() {
    $('.catalog__filters').fadeIn(200);
    $('body').append("<div class='overlay'></div>").css('overflow', 'hidden');
      // $('.overlay').css('top', $('.header').height());
      $('.overlay').click(function () {
        $('.catalog__filters').fadeOut(0);
        $(this).remove();
        $('body').removeAttr('style');
      });
  });
}
