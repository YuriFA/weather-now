import React from 'react';
import { Provider } from 'react-redux';

import App from './App';
import LanguageProvider from './LanguageProvider';

const Root = ({ store }) => (
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>
);

export default Root;
