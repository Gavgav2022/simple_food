$(function () {


  //range-slider
  var $range = $(".price-filter__slider"),
    $inputFrom = $(".price-filter__field--from"),
    $inputTo = $(".price-filter__field--to"),
    instance,
    min = 0,
    max = 1100,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    hide_min_max: true,
    hide_from_to: true,
    onStart: updateInputs,
    onChange: updateInputs,
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;
    $inputFrom.prop("value", +from);
    $inputTo.prop("value", +to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  const headerHeight = $('.header__top').outerHeight();
  var scrolled;

  // Липкий хедер

  // Добавляем слик при width = 560px

  $(document).ready(function () {
    function checkWidth() {
      var windowWidth = $('body').innerWidth(),
        elem = $(".best__content");
      elem2 = $(".shares__box"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
      // страницу для поиска нужного элемента
      if (windowWidth < 560) {
        elem.addClass('best-slick');
        elem2.addClass('shares-slick');
        $('.best-slick').slick({
          arrows: false,
          dots: true
        });
      }
      if (windowWidth < 768) {
        elem2.addClass('shares-slick');
        $('.shares-slick').slick({
          arrows: false,
          dots: true
        });
      } else {
        elem.removeClass('best-slick');
      }
    }

    checkWidth(); // проверит при загрузке страницы

    $(window).resize(function () {
      checkWidth(); // проверит при изменении размера окна клиента
    });
  });

  $('.reviews__slider').slick({
    arrows: true,
    dots: true
  });

  $('.product__photo').slick({
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('.offers__goods').slick({
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
          dots: true

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 50) {
      $(".header").css({
        "background-color": "#c2c2c2"
      })
      $(".header__inner").css({
        "height": "60px"
      })
    }
    if (50 > scrolled) {
      $(".header").css({
        "background-color": "transparent"
      })
    }

  }

});

let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("num");
let number = 1;
let price = 350;

buttonCountPlus.onclick = function() {
    if (number <= 10000) {
        number++;
        count.innerHTML = number;
        count2.value = number * price;
    }
};

buttonCountMinus.onclick = function() {
   if (number >= 2) {
       number--;
       count.innerHTML = number;
       count2.value = number * price;
    }
}

var mixer = mixitup('.popular__goods, .product-list__goods, .product__bottom', {
  load: {
    filter: '.category-a'
}
});

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const filter = document.querySelector('.filter'); //наша кнопка
  const filters = document.querySelector('.product-list__filters'); //наша кнопка
  const mobileLogo = document.querySelector('.logo'); //мобильное меню
  const mobileMenu = document.querySelector('.menu'); //мобильное меню
  const userNav = document.querySelector('.user-nav'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА
  const slickfull = document.querySelector('.product__img');
  const slickslide = document.querySelector('.product__photo'); 
  const slickClose = document.querySelector('.slick-close'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu--active')) { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      mobileLogo.classList.add('logo--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
      userNav.classList.add('user-nav--active'); //Блокируем скролл при открытом меню
    } else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      mobileLogo.classList.remove('logo--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
      userNav.classList.remove('user-nav--active'); //Блокируем скролл при открытом меню
    }
  });
  slickfull.addEventListener('click', () => {
    slickslide.classList.toggle('slick--active'); //когда filter открыто
    if (slickslide.classList.contains('slick--active')) { //Проверяем, есть ли у filter активный класс
      slickClose.classList.add('slick-close--active'); //Когда открыто, иконка становится крестиком
    } else { //Когда нету активного класса у меню
      slickClose.classList.remove('slick-close--active'); 
    }
  });

  slickClose.addEventListener('click', () => {
    slickslide.classList.remove('slick--active'); 
    slickClose.classList.remove('slick-close--active');//когда filter открыто
  });
  //Filters
  filter.addEventListener('click', () => {
    filter.classList.toggle('filter--active'); //когда filter открыто
  });
});