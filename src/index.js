import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

import App from './App';
import store from './store/store';
import './index.css';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();
