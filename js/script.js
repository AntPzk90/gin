if ($('.main-slider__container').length > 0) {
  new Swiper('.main-slider__container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

if($('.comparison__main-wrapper').length > 0) {
  new Swiper('.comparison__main-wrapper', {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
    }
  });
}

$('.header__burger').click(function () {
  $(this).toggleClass('header__burger--active');
  $('.bottom-nav__list').slideToggle(150).css('display', 'flex');
  if (window.matchMedia("screen and (max-width: 768px)").matches) {
    $('.main-nav:not(.main-nav--footer)').slideToggle(150).css('display', 'flex');
  }
});

if($('.catalog__slider').length > 0) {
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
}

function autoInputWidth(element) {
  let buffer = element.parent().find('.catalog__form-input-buffer');
  buffer.text(element.val());
  element.width(buffer.width() + 10);
}

$('.catalog__form-input').keydown(function () {
  autoInputWidth($(this));
});

if ($('.catalog__select').length > 0) {
  $(document).ready(function () {
    $('.catalog__select').select2({
      placeholder: 'Самые популярные',
      minimumResultsForSearch: -1,
    });
  });
}

if (window.matchMedia('(max-width: 1024px)').matches) {
  $('.catalog__filters-btn-close').click(function () {
    $(this).parent().fadeOut(200);
    $('.overlay').remove();
    $('body').removeAttr('style');
  });

  $('.catalog__filters-btn').click(function () {
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

var pictures = [];

$('.gallery__picture-preview').each(function () {
  pictures.push($(this).find('img').attr('src'))
});

var picturesPreview = document.querySelectorAll('.gallery__picture-preview');
var fullPicture = document.querySelector(".full-picture");
var clickHendler = function (btn, picture) {
  btn.addEventListener("click", function () {
    fullPicture.src = picture;
  });
}
for (var i = 0; i < picturesPreview.length; i++) {
  clickHendler(picturesPreview[i], pictures[i]);
}

$('.catalog-card__input').keydown(function () {
  autoInputWidth($(this));
});

$('.catalog-card__dscr-btn').click(function () {
  if (!$(this).hasClass('catalog-card__dscr-btn--active')) {
    $('catalog-card__dscr-btn--active').removeClass('catalog-card__dscr-btn--active');
    $(this).addClass('catalog-card__dscr-btn--active');
  }
  $('.catalog-card__dscr-txt').fadeOut(0);
  $('#' + $(this).data('btn')).fadeIn(200);
});

let Counter = {
  count: 0,
  textContainer: $('.catalog-card__input'),
  plusHandler: function () {
    this.count++;
    this.textContainer.val(this.count);
  },
  minusHandler: function () {
    this.count--;
    if (this.count <= 0) {
      this.count = 0;
    }
    this.textContainer.val(this.count);
  }
}

$('.catalog-card__btn--plus').click(function () {
  Counter.plusHandler();
});

$('.catalog-card__btn--minus').click(function () {
  Counter.minusHandler();
});

let CounterCart = {
  count: 0,
  textContainer: $('.cart__input'),
  plusHandler: function () {
    this.count++;
    this.textContainer.val(this.count);
  },
  minusHandler: function () {
    this.count--;
    if (this.count <= 0) {
      this.count = 0;
    }
    this.textContainer.val(this.count);
  }
}

$('.cart__btn--plus').click(function () {
  CounterCart.plusHandler();
});

$('.cart__btn--minus').click(function () {
  CounterCart.minusHandler();
});
