import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { updateLocale } from './actions';
import { loadState, saveState } from './storage/localStorage';
import { getCurrentWeatherData } from './api/openWeatherMap';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  store.dispatch(updateLocale());

  store.subscribe(() => {
    saveState({
      locations: store.getState().locations
    });
  });

  return store;
};

export default configureStore;
