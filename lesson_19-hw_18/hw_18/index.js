const weatherWidget = document.getElementById('weatherWidget');
const refreshButton = weatherWidget.getElementsByClassName('weather__refresh-button')[0];
const myCity = 'KHARKIV';

setInterval(getWeatherTime(weatherWidget, myCity), 30000);

refreshButton.addEventListener('click', function () {
  rotate(refreshButton);
  getWeatherTime(weatherWidget, myCity);
});
