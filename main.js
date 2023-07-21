const apiKey = 'b81a2f2fa82af1305f1029fc071991c9';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherDisplay = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');
const error = document.querySelector('.error');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    error.classList.add('show');
    weatherDisplay.classList.remove('show');
  } else {
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    switch (data.weather[0].main) {
      case 'Clouds':
        weatherIcon.src = 'images/clouds.png';
        break;

      case 'Clear':
        weatherIcon.src = 'images/clear.png';
        break;

      case 'Rain':
        weatherIcon.src = 'images/rain.png';
        break;

      case 'Drizzle':
        weatherIcon.src = 'images/drizzle.png';
        break;

      case 'Mist':
        weatherIcon.src = 'images/mist.png';
        break;

      case 'Snow':
        weatherIcon.src = 'images/snow.png';
        break;

      default:
        console.log('New weather condition');
        break;
    }

    weatherDisplay.classList.add('show');
    error.classList.remove('show');
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});
