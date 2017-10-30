import axios from 'axios';

const API_KEY = '1f0adcdc59c19c746c99b29b085144a9';
const API_URL = 'https://api.openweathermap.org/data/2.5';

const celsiusToFahrenheit = temp => Math.round((temp * 1.8) + 32);

const formatWeatherData = (res) => {
  const { data } = res;
  const celsiusTemp = Math.round(data.main.temp);
  return {
    celsius: celsiusTemp,
    fahrenheit: celsiusToFahrenheit(data.main.temp),
    humidity: Math.round(data.main.humidity),
    wind: Math.round(data.wind.speed),
    name: data.name,
    country: data.sys.country.toLowerCase(),
    iconUrl: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    description: data.weather[0].description
  };
};

export const getCurrentWeather = ({ location, lang = 'ru', units = 'metric' }) => {
  const requestUrl = `${API_URL}/weather?q=${location}&APPID=${API_KEY}&lang=${lang}&units=${units}`;

  return axios.get(requestUrl)
    .then(formatWeatherData);
};

export const getCurrentWeatherByGeo = ({
  lat,
  lon,
  lang = 'ru',
  units = 'metric'
}) => {
  const requestUrl = `${API_URL}/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&lang=${lang}&units=${units}`;

  return axios.get(requestUrl)
    .then(formatWeatherData);
};
