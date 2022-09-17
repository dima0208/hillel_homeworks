'use strict';

const form = document.forms.timerForm;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let userDate = new Date(form.elements.date.value);
  let remainderTime = userDate - Date.now();
  let newDate = new Date(remainderTime);
  const timePanel = this.closest('.countdown-timer__wrapper').querySelector(
    '.countdown-timer__time-panel'
  );

  const infoMessage = document.createElement('p');
  infoMessage.innerHTML = `До ${userDate.toLocaleDateString(
    'uk-UA'
  )} осталось:`;
  timePanel.before(infoMessage);

  let years = newDate.getFullYear() - 1970;
  if (years) {
    timePanel.insertAdjacentHTML(
      'afterbegin',
      `<p>${newDate.getFullYear() - 1970} лет</p>`
    );
  }
  console.log(newDate.getFullYear() - 1970);
  console.log(newDate.getMonth());
  console.log(newDate.getDate());
  console.log(newDate.getHours());
  console.log(newDate.getMinutes());
  console.log(newDate.getSeconds());
});

// let date3 = new Date();
// date3 = date3.toLocaleDateString('en-UK');
// console.log(date3);

// console.log(Date());
// const now = new Date();
// console.log(now);

// const nowPlusYear = new Date();
// nowPlusYear.setFullYear(2023);
// console.log(nowPlusYear);

// const nowPlusWeek = new Date();
// nowPlusWeek.setDate(17 + 7);
// console.log(nowPlusWeek);

// console.log((nowPlusWeek - now) / (1000 * 60 * 60));
// console.log((nowPlusYear - now) / (1000 * 60 * 60 * 24));

// const date2 = new Date('2030-08-02T20:30:23');
// console.log(date2);
// let date5 = Date.parse('2030-08-02T20:30:23');
// console.log(date5);

// console.log(date2.toLocaleDateString('uk-UA'));
