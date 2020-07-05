'use strict';

// Плавный скол с навигации

/* $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
}); */

// Плавный скол с навигации

(function () {
  $('.js-menu').on('click', function () {
    $.fancybox.open({
      src: '#menu',
      type : 'inline',
      touch: false,
    })
  })
})();

/**
 * @description Слайдер банера
 * @type {Swiper}
 */

(function () {
  let swiper = new Swiper('.js-banner', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button--next',
      prevEl: '.swiper-button--prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        spaceBetween: 30,
      }
    }
  });
})();

/**
 * @description Слайдер категории
 * @type {Swiper}
 */

(function () {
  let swiper = new Swiper('.js-category', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-circle--next',
      prevEl: '.swiper-button-circle--prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      }
    }
  });
})();

(function () {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    navigation: {
      nextEl: '.swiper-button-circle--next',
      prevEl: '.swiper-button-circle--prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
})();

/**
 * @description таб фильтр
 */

(function () {
  const btnFilter = $('[data-btn-filter]');
  const blockFilter = $("[data-filter]");

  btnFilter.on("click", function () {
    btnFilter.removeClass("active");
    $(this).addClass("active");
    $('[data-filter]').attr("hidden", "");

    $(".tab-filter__btn.active").each(function(){
      if ($(this).data("btn-filter") === 'all') {
        blockFilter.removeAttr("hidden");
      } else {
        $('[data-filter="'+$(this).data("btn-filter")+'"]').removeAttr("hidden");
      }
    });
  });
})();
