import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import 'font-awesome/css/font-awesome.min.css';

import Root from './components/Root';
import configureStore from './configureStore';
import {
  updateLocales,
  updateIntl,
  refreshAllLocations,
  addLocationByGeo
} from './actions';
import { translationMessages, DEFAULT_LOCALE } from './locales';
import getCurrentLocation from './api/geolocation';
import { isEmptyObj } from './utils';
import './main.css';

const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle
delete window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle

const store = configureStore(preloadedState);

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
  store.dispatch(addLocationByGeo());
} else {
  store.dispatch(refreshAllLocations());
}

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);
