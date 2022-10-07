'use strict';
// ------------------------------task 1-----------------------------------
const colorButton = document.querySelector('.task-one__button');
const subtitle = document.querySelector('.task-one__subtitle');

colorButton.addEventListener('click', function () {
  subtitle.classList.toggle('_active');
});

// ------------------------------task 2-----------------------------------
const adressButton = document.querySelector('.task-two__adress-button');
const transferButton = document.querySelector('.task-two__transfer-button');

if (!transferButton.hasAttribute('document.location.href')) {
  transferButton.classList.add('_lock');
}

adressButton.addEventListener('click', function () {
  let userURL = prompt('Enter your URL');
  while (userURL == false) {
    alert('Вы не можете перейте но пустую ссылку');
    userURL = prompt('Enter your URL');
  }
  if (userURL == null) {
    alert('Вы не ввели адресс, попробуйте еще раз');
  } else {
    transferButton.setAttribute(
      'onclick',
      `document.location.href = '${userURL}'`
    );
    transferButton.classList.remove('_lock');
  }
});

// ------------------------------task 3-----------------------------------

// rows/columns - numbres of rows/columns in table
// place - tag where you want to insert table

const placeClass = document.querySelector('.task-three__container');
createTable(10, 10, placeClass);

function createTable(rows, columns, place) {
  const customTable = document.createElement('table');
  place.append(customTable);
  let counter = 0;
  for (let i = 1; i <= rows; i++) {
    let tableRow = document.createElement('tr');
    customTable.append(tableRow);
    for (let j = 1; j <= columns; j++) {
      let tableColumn = document.createElement('td');
      tableColumn.classList.add('table__data');
      counter++;
      tableColumn.innerHTML = counter;
      tableRow.append(tableColumn);
    }
  }
}

// ------------------------------task 4-----------------------------------

// Массив изображений
const images = [
  './images/1.jpg',
  './images/2.jpg',
  './images/3.jpg',
  './images/4.jpg',
  './images/5.jpg',
  './images/6.jpg',
  './images/7.jpg',
  './images/8.jpg',
  './images/9.jpg',
];

// Блок получения случайной картинки при загрузке/перезагруке сайта
const getRandomImage = (maxNumber) => Math.floor(Math.random() * maxNumber);
const randomImage = getRandomImage(images.length);
const imageContainers = document.querySelectorAll(
  '.task-four__image-container'
);
imageContainers.forEach((item) => {
  item.innerHTML = `<img class = "image" src = "${
    images[getRandomImage(images.length)]
  }">`;
});

// Блок смены картинки при нажатии на кнопки
function changeImg() {
  let prev = getRandomImage(images.length);
  let next;
  return function swap() {
    next = getRandomImage(images.length);
    if (prev === next) {
      swap();
      return;
    } else {
      this.closest('.random-image__container').querySelector(
        '.task-four__image-container'
      ).innerHTML = `<img class = "image" src = "${images[next]}">`;
      prev = next;
    }
  };
}

const randomButton = document.querySelector('[data-id="0"]');
const swap1 = changeImg();
console.log(swap1);
randomButton.addEventListener('click', swap1);

const randomButton2 = document.querySelector('[data-id="1"]');
const swap2 = changeImg();
randomButton2.addEventListener('click', swap2);

const randomButton3 = document.querySelector('[data-id="2"]');
const swap3 = changeImg();
randomButton3.addEventListener('click', swap3);
