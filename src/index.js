import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import 'font-awesome/css/font-awesome.min.css';

import App from './components/App';
import LanguageProvider from './components/LanguageProvider';
import configureStore from './configureStore';
import {
  updateLocales,
  updateIntl,
  refreshAllLocations,
  fetchWeatherByGeoAndAddLocation
} from './actions';
import { translationMessages, DEFAULT_LOCALE } from './locales';
import getCurrentLocation from './api/geolocation';
import { isEmptyObj } from './utils';
import './main.css';

const store = configureStore();

// setting up locales
addLocaleData(en);
addLocaleData(ru);

store.dispatch(updateLocales(translationMessages));

const currentLocale = store.getState().intl.locale || DEFAULT_LOCALE;
const { locales } = store.getState();
store.dispatch(updateIntl({
  locale: currentLocale,
  messages: locales[currentLocale]
}));

// refresh weather data from localStorage after reload
const { locations } = store.getState();
if (isEmptyObj(locations)) {
  getCurrentLocation((position) => {
    const { latitude: lat, longitude: lon } = position.coords;
    store.dispatch(fetchWeatherByGeoAndAddLocation({ lat, lon }));
  });
} else {
  store.dispatch(refreshAllLocations());
}

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
);
