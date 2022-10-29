'use strict';

let flag;

$(window).on('resize', () => {
  const $windowWidth = $(window).width();

  if (flag && $windowWidth <= 768) {
    $('#exampleModal').modal('show');
    flag = false;
  } else if ($windowWidth > 768) {
    flag = true;
  }
});
