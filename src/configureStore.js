import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import locations from './reducers';
import { loadState, saveState } from './storage/localStorage';
import { getCurrentWeatherData } from './api/openWeatherMap';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    locations,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export default configureStore;
