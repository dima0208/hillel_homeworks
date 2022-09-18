'use strict';

const form = document.forms.timerForm;
const timePanel = document.querySelector('.countdown-timer__time-panel');
const startButton = document.querySelector('.form__button');
const stopButton = document.querySelector('.form__stop-button');
let tikTak;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  refreshTime();
  let error = refreshTime();
  if (error > 0) {
    return;
  }
  startButton.classList.add('_active');
  stopButton.classList.add('_active');
  tikTak = setInterval(refreshTime, 1000);
  form.elements.date.disabled = true;
});

stopButton.addEventListener('click', function (event) {
  event.preventDefault();
  stopButton.classList.remove('_active');
  startButton.classList.remove('_active');
  clearInterval(tikTak);
  form.elements.date.disabled = false;
});

function removeTimecode() {
  const timeCodeArray = document.querySelectorAll('.timecode');
  timeCodeArray.forEach((item) => item.remove());
}

function refreshTime() {
  let error = 0;
  removeTimecode();
  let userDate = form.elements.date.valueAsDate;
  if (!userDate) {
    timePanel.insertAdjacentHTML(
      'beforeBegin',
      `<p class="timecode" style="color: red;">Укажите дату для начала отсчета</p>`
    );
    error++;
    return error;
  }

  // Нахожу разность между введенной датой и настоящим временем. Сразу отнимаю разницу в часовых поясах с помощью "getTimezoneOffset".
  // Date.parse() и getTime() мне возвращает милисикунды с прибавленными 3 часами моего пояса. Хотя по описанию UTC+0. Я не понял этого.
  let remainderTime =
    userDate - userDate.getTimezoneOffset() * (-60 * 1000) - Date.now(); // getTimezoneOffset перевожу в секунды
  if (remainderTime < 0) {
    timePanel.insertAdjacentHTML(
      'beforeBegin',
      `<p class="timecode" style="color: red;">К сожалению, отсчитать время к прошлому, невозможно</p>`
    );
    remainderTime = 0;
    error++;
    return error;
  }
  let newDate = new Date(remainderTime); // Получаю сумму времени "1 января 1970 года + мой отрезок "remainder date" "
  newDate -= newDate.getTimezoneOffset() * (-60 * 1000); // Также отнимаю разницу в часовых поясах, т.к. при объявлении newDate js ее добавил
  newDate = new Date(newDate); // Перевод значения "newDate" в милисекундах - обратно в обычный вид даты

  const infoMessage = document.createElement('p');
  infoMessage.innerHTML = `До ${userDate.toLocaleDateString(
    'uk-UA'
  )} осталось:`;
  infoMessage.classList.add('timecode');
  timePanel.before(infoMessage);

  let years = newDate.getFullYear() - 1970; // Отнимаю 1970 лет, чтобы остался только нужный промежуток лет
  if (years) {
    timePanel.insertAdjacentHTML(
      'beforeend',
      `<div class="timecode">
        <p style="font-size: 30px;">${years}</p>
        <p>лет</p>
      </div>`
    );
  }
  let months = newDate.getMonth();
  if (months) {
    timePanel.insertAdjacentHTML(
      'beforeend',
      `<div class="timecode">
        <p style="font-size: 30px;">${months}</p>
        <p>месяцев</p>
      </div>`
    );
  }
  let days = newDate.getDate() - 1; // По идее когда я объявил переменную "newDate", то автоматом добавляется 1 день т.к. "1 января" 1970 года. Хотя не уверен.
  if (days) {
    timePanel.insertAdjacentHTML(
      'beforeend',
      `<div class="timecode">
        <p style="font-size: 30px;">${days}</p>
        <p>дней</p>
      </div>`
    );
  }
  let hours = newDate.getHours();
  if (hours) {
    timePanel.insertAdjacentHTML(
      'beforeend',
      `<div class="timecode">
        <p style="font-size: 30px;">${hours}</p>
        <p>часов</p>
      </div>`
    );
  }
  let minutes = newDate.getMinutes();
  if (minutes) {
    timePanel.insertAdjacentHTML(
      'beforeend',
      `<div class="timecode">
        <p style="font-size: 30px;">${minutes}</p>
        <p>минут</p>
      </div>`
    );
  }
  let seconds = newDate.getSeconds();
  if (seconds) {
    timePanel.insertAdjacentHTML(
      'beforeend',
      `<div class="timecode">
        <p style="font-size: 30px;">${seconds}</p>
        <p>секунд</p>
      </div>`
    );
  }
}
