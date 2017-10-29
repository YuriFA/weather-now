import { v4 } from 'uuid';
import { getCurrentWeatherData } from './../api/openWeatherMap';

export const ADD_LOCATION = 'ADD_LOCATION';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const CHANGE_UNITS = 'CHANGE_UNITS';

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
    const location = getState().locations[id].name;
    const lang = getState().intl.locale;
    dispatch(requestWeather(id));
    getCurrentWeatherData({ location, lang })
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

export const refreshAllLocations = () => {
  return (dispatch, getState) => {
    const { locations } = getState();
    Object.keys(locations).map(id => dispatch(fetchWeather(id)));
  };
};

export const selectUnits = (id, units) => ({
  type: CHANGE_UNITS,
  id,
  units
});

export const SET_LOCALE = 'SET_LOCALE';
export const UPDATE_LOCALES = 'UPDATE_LOCALES';

export const updateIntl = ({ locale, messages }) => ({
  type: SET_LOCALE,
  locale,
  messages
});

export const updateLocales = payload => ({
  type: UPDATE_LOCALES,
  payload
});

