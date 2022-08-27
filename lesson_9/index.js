"use strict";
// ------------------------------task 1-----------------------------------
const colorButton = document.querySelector(".task-one__button");
const subtitle = document.querySelector(".task-one__subtitle");

colorButton.addEventListener("click", function () {
  subtitle.classList.toggle("_active");
});

// ------------------------------task 2-----------------------------------
const adressButton = document.querySelector(".task-two__adress-button");
const transferButton = document.querySelector(".task-two__transfer-button");

if (!transferButton.hasAttribute("document.location.href")) {
  transferButton.classList.add("_lock");
}

adressButton.addEventListener("click", function () {
  let userURL = prompt("Enter your URL");
  transferButton.setAttribute(
    "onclick",
    `document.location.href = '${userURL}'`
  );
  transferButton.classList.remove("_lock");
});

// ------------------------------task 3-----------------------------------

// rows/columns - numbres of rows/columns in table
// placeClass - class of container where you want to insert table

createTable(10, 10, ".task-three__container");

function createTable(rows, columns, placeClass) {
  placeClass = document.querySelector(`${placeClass}`);
  const customTable = document.createElement("table");
  placeClass.append(customTable);
  let counter = 0;
  for (let i = 1; i <= rows; i++) {
    let tableRow = document.createElement("tr");
    customTable.append(tableRow);
    for (let j = 1; j <= columns; j++) {
      let tableColumn = document.createElement("td");
      tableColumn.style.cssText = `
      padding: 5px 10px;
      background-color: darkkhaki;
      text-align: center;
    `;
      counter++;
      tableColumn.innerHTML = counter;
      tableRow.append(tableColumn);
    }
  }
}

// ------------------------------task 4-----------------------------------

// Массив изображений
const images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg",
  "./images/9.jpg",
];

// Блок получения случайной картинки при загрузке/перезагруке сайта
let randomImage = Math.floor(Math.random() * images.length);
const imageContainer = document.querySelector(".task-four__image-container");
imageContainer.innerHTML = `<img class = "image" src = "${images[randomImage]}">`;

// Блок рандома картинки с помощью кнопки
let prevRandomImage;
let nextRandomImage;
const randomButton = document.querySelector(".task-four__button");
randomButton.addEventListener("click", function () {
  // Тут мои потуги избежать повторения вывода одинакового изобаржения.
  // Честно, я просто уже не понимаю как при нажатии на кнопку у меня бывают повторы
  if (nextRandomImage) {
    prevRandomImage = nextRandomImage;
    nextRandomImage = Math.floor(Math.random() * images.length);
    while (nextRandomImage === prevRandomImage) {
      nextRandomImage = Math.floor(Math.random() * images.length);
    }
    imageContainer.innerHTML = `<img class = "image" src = "${images[nextRandomImage]}">`;
  } else {
    prevRandomImage = Math.floor(Math.random() * images.length);
    nextRandomImage = Math.floor(Math.random() * images.length);
    while (
      randomImage === prevRandomImage ||
      prevRandomImage === nextRandomImage ||
      randomImage === nextRandomImage
    ) {
      prevRandomImage = Math.floor(Math.random() * images.length);
      nextRandomImage = Math.floor(Math.random() * images.length);
    }
    imageContainer.innerHTML = `<img class = "image" src = "${images[nextRandomImage]}">`;
  }
});
