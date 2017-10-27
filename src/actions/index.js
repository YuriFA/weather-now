import { v4 } from 'uuid';
import { getCurrentWeatherData } from './../api/openWeatherMap';

export const ADD_LOCATION = 'ADD_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const SELECT_UNITS = 'SELECT_UNITS';

export const addLocation = name => ({
  type: ADD_LOCATION,
  id: v4(),
  name,
});

export const removeLocation = id => ({
  type: REMOVE_LOCATION,
  id,
});

export const requestWeather = id => ({
  type: FETCH_WEATHER_REQUEST,
  id
});

export const receiveWeather = (id, data) => ({
  type: FETCH_WEATHER_SUCCESS,
  id,
  ...data
});

export const fetchWeatherError = id => ({
  type: FETCH_WEATHER_FAILURE,
  id
});

export const fetchWeather = (id) => {
  return (dispatch, getState) => {
    const location = getState()[id].name;
    dispatch(requestWeather(id));
    getCurrentWeatherData(location)
      .then((data) => {
        dispatch(receiveWeather(id, data));
      })
      .catch((error) => {
        console.log('ERROR', error);
        dispatch(fetchWeatherError(id));
      });
  };
};

export const addLocationAndFetchWeather = (name) => {
  return (dispatch) => {
    const { id } = dispatch(addLocation(name));
    dispatch(fetchWeather(id));
  };
};

export const selectUnits = (id, units) => ({
  type: SELECT_UNITS,
  id,
  units
});
