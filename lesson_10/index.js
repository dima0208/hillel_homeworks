'use strict';

const images = [
  './img/01.jpg',
  './img/02.jpg',
  './img/03.jpg',
  './img/04.jpg',
  './img/05.jpg',
  './img/06.jpg',
  './img/07.jpg',
  './img/08.jpg',
  './img/09.jpg',
  './img/10.jpg',
];

const buttonContainer = document.querySelector('.slider__button-container');
// еще привыкаю к переносам prettier
let number = 0;
buttonContainer
  .closest('.slider__wrapper')
  .querySelector('.slider__progress-text').innerHTML = `Фото ${number + 1} из ${
  images.length
}`;

buttonContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('slider__prev-button')) {
    this.closest('.slider__wrapper')
      .querySelector('.slider__image')
      .setAttribute('src', images[--number]);
  }
  if (event.target.classList.contains('slider__next-button')) {
    this.closest('.slider__wrapper')
      .querySelector('.slider__image')
      .setAttribute('src', images[++number]);
  }

  let lockedButton = () => {
    if (number < 1) {
      this.closest('.slider__wrapper').querySelector(
        '.slider__prev-button'
      ).disabled = true;
    } else {
      this.closest('.slider__wrapper').querySelector(
        '.slider__prev-button'
      ).disabled = false;
    }
    if (number == images.length - 1) {
      this.closest('.slider__wrapper').querySelector(
        '.slider__next-button'
      ).disabled = true;
    } else {
      this.closest('.slider__wrapper').querySelector(
        '.slider__next-button'
      ).disabled = false;
    }
  };
  lockedButton();
  buttonContainer
    .closest('.slider__wrapper')
    .querySelector('.slider__progress-text').innerHTML = `Фото ${
    number + 1
  } из ${images.length}`;
});
