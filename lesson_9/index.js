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
let randomImage = Math.floor(Math.random() * images.length);
const imageContainer = document.querySelector('.task-four__image-container');
imageContainer.innerHTML = `<img class = "image" src = "${images[randomImage]}">`;

// Блок рандома картинки с помощью кнопки
let prevRandomImage = randomImage;
const randomButton = document.querySelector('.task-four__button');
randomButton.addEventListener('click', noRepeat);

function noRepeat() {
  randomImage = Math.floor(Math.random() * images.length);
  if (prevRandomImage === randomImage) {
    return noRepeat();
  } else {
    prevRandomImage = randomImage;
    imageContainer.innerHTML = `<img class = "image" src = "${images[randomImage]}">`;
  }
}
