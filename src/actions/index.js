import { getCurrentWeatherData } from './../api/openWeatherMap';

export const ADD_LOCATION = 'ADD_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

let nextLocationId = 0;
export const addLocation = name => ({
  type: ADD_LOCATION,
  id: (nextLocationId++).toString(),
  name,
});

export const removeLocation = id => ({
  type: REMOVE_LOCATION,
  id,
});

export const requestWeather = id => ({
  type: REQUEST_WEATHER,
  id
});

export const receiveWeather = (id, data) => ({
  type: RECEIVE_WEATHER,
  id,
  ...data
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
        console.log(error);
        // TODO: dispatch failed request action
      });
  };
};

export const addLocationAndFetchWeather = (name) => {
  return (dispatch) => {
    const { id } = dispatch(addLocation(name));
    dispatch(fetchWeather(id));
  };
};
