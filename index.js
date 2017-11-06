/* global window, document */
/* eslint no-render-return-value: 0, jsx-filename-extension: 0 */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
import { Provider } from 'react-redux';
import store from './store.js';

const render = () => ReactDOM.render(
  <Provider store={store}>
    <CounterApp />
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
