import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { loadState, saveState } from './storage/localStorage';
import { getCurrentWeatherData } from './api/openWeatherMap';

const configureStore = (preloadedState) => {
  const persistedState = loadState() || preloadedState;
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    saveState({
      locations: store.getState().locations,
      intl: store.getState().intl
    });
  });

  return store;
};

export default configureStore;
