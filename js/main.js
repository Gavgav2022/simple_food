$(function () {
  var mixer = mixitup('.popular__goods');

  const headerHeight = $('.header__top').outerHeight();
  var scrolled;

  $(".header a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - headerHeight;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(document).ready(function () {
    

    checkWidth(); // проверит при загрузке страницы

    $(window).resize(function () {
      checkWidth(); // проверит при изменении размера окна клиента
    });
  });

  $('.reviews__slider').slick({
    arrows: true,
    dots: true
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

  document.addEventListener('DOMContentLoaded', () => {
    //DOMContentLoaded означает, когда наш документ будет готов к работе, тогда начнут работать наши скрипты

    //Mobile Menu
    const burger = document.querySelector('.burger'); //находим наш бургер по селектору класса

    burger.addEventListener('click', () => {
      //Добавляем событие "клик" на бургер

      burger.classList.toggle('burger--active'); //при клике на бургер у нас будет либо добавлятся класс, либо удаляется.
      //ВАЖНО! Мы уже работаем с данным классом, поэтому тут "." не ставим, иначе в атрибут class значение добавится с "." и работать не будет.
    });
  })

});

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileLogo = document.querySelector('.logo'); //мобильное меню
  const mobileMenu = document.querySelector('.menu'); //мобильное меню
  const userNav = document.querySelector('.user-nav'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

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
});