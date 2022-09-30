'use strict';

let flag = true;
let $firstWidth = $(window).width();
$(window).on('resize', function () {
  const $window = $(window).width();
  if (flag === true && $window - $firstWidth < 0 && $window <= 768) {
    flag = false;
    $('.btn').trigger('click');
  } else if ($window > 768) {
    flag = true;
  }
  $firstWidth = $window;
});
