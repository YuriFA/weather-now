import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';

import App from './components/App';
import LanguageProvider from './components/LanguageProvider';
import configureStore from './configureStore';
import './main.css';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
);
