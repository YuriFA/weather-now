import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import rootReducer from './reducers';
import { updateLocales, updateIntl, refreshAllLocations } from './actions';
import { translationMessages, DEFAULT_LOCALE } from './locales';
import { loadState, saveState } from './storage/localStorage';
import { getCurrentWeatherData } from './api/openWeatherMap';

const configureStore = () => {
  addLocaleData(en);
  addLocaleData(ru);

  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.dispatch(updateLocales(translationMessages));

  const currentLocale = store.getState().intl.locale || DEFAULT_LOCALE;
  const { locales } = store.getState();
  store.dispatch(updateIntl({
    locale: currentLocale,
    messages: locales[currentLocale]
  }));

  store.dispatch(refreshAllLocations());

  store.subscribe(() => {
    saveState({
      locations: store.getState().locations,
      intl: store.getState().intl
    });
  });

  return store;
};

export default configureStore;
