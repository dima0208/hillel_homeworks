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

const buttonPrev = document.querySelector('.slider__prev-button');
const buttonNext = document.querySelector('.slider__next-button');
const buttonContainer = document.querySelector('.slider__button-container');
const progressText = document.querySelector('.slider__progress-text');

let number = 0;
progressText.innerHTML = `Фото ${number + 1} из ${images.length}`;
lockedButton();

buttonContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('slider__prev-button')) {
    this.closest('.slider__wrapper').querySelector(
      '.slider__content'
    ).innerHTML = `<img class = "slider__image" src="${images[--number]}">`; // слегка странноватые переносы строк от Prettier, я его настрою к следующему ДЗ
  }
  if (event.target.classList.contains('slider__next-button')) {
    this.closest('.slider__wrapper').querySelector(
      '.slider__content'
    ).innerHTML = `<img class = "slider__image" src="${images[++number]}">`;
  }
  lockedButton();
  progressText.innerHTML = `Фото ${number + 1} из ${images.length}`;
});

function lockedButton() {
  if (number < 1) {
    buttonPrev.classList.add('_lock');
  } else {
    buttonPrev.classList.remove('_lock');
  }
  if (number > images.length - 2) {
    buttonNext.classList.add('_lock');
  } else {
    buttonNext.classList.remove('_lock');
  }
}
