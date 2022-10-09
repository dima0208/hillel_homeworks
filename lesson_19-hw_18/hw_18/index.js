'use strict';

const weatherWidget = document.getElementById('weatherWidget');
const refreshButton = document.querySelector('.weather__refresh-button');
const myCity = 'KHARKIV';

setInterval(getWeatherTime(weatherWidget, myCity), 30000);

refreshButton.addEventListener('click', function () {
  rotate(refreshButton);
  getWeatherTime(weatherWidget, myCity);
});
