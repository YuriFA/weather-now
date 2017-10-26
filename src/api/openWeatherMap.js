import axios from 'axios';

const API_KEY = '1f0adcdc59c19c746c99b29b085144a9';
const API_URL = 'https://api.openweathermap.org/data/2.5';

const celsiusToFahrenheit = temp => (temp * 1.8) + 32;

export const getCurrentWeatherData = (location, lang = 'ru', units = 'metric') => {
  const requestUrl = `${API_URL}/weather?q=${location}&APPID=${API_KEY}&lang=${lang}&units=${units}`;

  return axios.get(requestUrl)
    .then((res) => {
      const { data } = res;
      console.log(data);
      return {
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        name: data.name,
        country: data.sys.country.toLowerCase(),
      };
    });
};

export const Q = 10;
