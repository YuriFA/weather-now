import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import locations from './reducers';
import { getCurrentWeatherData } from './api/openWeatherMap';

import './main.css';

const store = createStore(
  locations,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk)
);

// getCurrentWeatherData('Moscow')
//   .catch(error => console.log(error.response.status));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
