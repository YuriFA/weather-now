/* eslint-disable no-use-before-define, function-paren-newline */
import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';

import Root from './src/components/Root';

const app = Express();
const port = 4445;

app.use('/static', Express.static('public'));

app.use(handleRender);


function handleRender(req, res) {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  const html = renderToString(
    <Root store={store} />
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Weather Now</title>
      <link href="https://fonts.googleapis.com/css?family=Rubik:400,700" rel="stylesheet">
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/static/bundle.js"></script>
    </body>
    </html>
  `;
}

app.listen(port);
