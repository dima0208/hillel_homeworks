function getWeatherTime(weatherContainer, city) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        alert(data.message);
        return;
      }
      weatherContainer.querySelector('.weather__city').textContent = data.name;
      weatherContainer.querySelector('.weather__humidity').textContent = 'Humidity: ' + data.main.humidity + '%';
      weatherContainer.querySelector('.weather__pressure').textContent = 'Pressure: ' + data.main.pressure + ' hPa';
      weatherContainer.querySelector('.weather__wind').textContent = 'Wind: ' + data.wind.speed + ' km/h';
      weatherContainer.querySelector('.weather__icon').setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
      weatherContainer.querySelector('.weather__temp').textContent = Math.round(data.main.temp) + ' °C';
      weatherContainer.querySelector('.weather__description').textContent = data.weather[0].description;
    });

  const date = new Date();
  weatherContainer.querySelector('.weather__date').textContent = date.toDateString();
  weatherContainer.querySelector('.weather__time').textContent = date.toLocaleString('en-US', {
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
