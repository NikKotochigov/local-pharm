"use strict";

$(function () {
  var header = $('.header__container');
  var hederHeight = header.height(); // вычисляем высоту шапки

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass('header_fixed');
      $('body').css({
        'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки

      });
    } else {
      header.removeClass('header_fixed');
      $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки

      });
    }
  });
});