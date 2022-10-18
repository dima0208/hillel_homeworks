'use strict';

function getWeatherTime(weatherContainer, city) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then((response) => response.json())
    .then((data) => {
      weatherContainer.getElementsByClassName('weather__city')[0].textContent = data.name;
      weatherContainer.getElementsByClassName('weather__humidity')[0].textContent = 'Humidity: ' + data.main.humidity + '%';
      weatherContainer.getElementsByClassName('weather__pressure')[0].textContent = 'Pressure: ' + data.main.pressure + ' hPa';
      weatherContainer.getElementsByClassName('weather__wind')[0].textContent = 'Wind: ' + data.wind.speed + ' km/h';
      weatherContainer.getElementsByClassName('weather__icon')[0].setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      weatherContainer.getElementsByClassName('weather__temp')[0].textContent = Math.round(data.main.temp) + ' °C';
      weatherContainer.getElementsByClassName('weather__description')[0].textContent = data.weather[0].description;
    })
    .catch((err) => {
      console.log('City not found or server is not responding.', err);
    });

  const date = new Date();
  weatherContainer.getElementsByClassName('weather__date')[0].textContent = date.toDateString();
  weatherContainer.getElementsByClassName('weather__time')[0].textContent = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  changeColorTheme(date, weatherWidget);
}

// ---------------------------------------------------------------
function changeColorTheme(currentDate, el) {
  const hours = currentDate.getHours();
  if (hours >= 5 && hours <= 15) {
    el.classList.remove('_evening');
    el.classList.remove('_night');
    el.classList.add('_day');
  } else if (hours >= 16 && hours <= 20) {
    el.classList.remove('_day');
    el.classList.remove('_night');
    el.classList.add('_evening');
  } else if (hours >= 21 || hours <= 4) {
    el.classList.remove('_evening');
    el.classList.remove('_day');
    el.classList.add('_night');
  }
}

// ---------------------------------------------------------------
function rotate(el) {
  el.classList.add('_rotate');
  el.disabled = true;
  setTimeout(() => {
    el.classList.remove('_rotate');
    el.disabled = false;
  }, 2000);
}
