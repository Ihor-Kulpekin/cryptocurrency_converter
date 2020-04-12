import {combineReducers} from 'redux';

import socketReducer from './socketReducer';
import exchangesReducer from './exchangesReducer';
import objectFromComponentReducer from './objectFromComponentReducer';
import historicalDataReducer from './historicalDataReducer';

export default combineReducers(
  {
    ...socketReducer,
    ...exchangesReducer,
    ...objectFromComponentReducer,
    ...historicalDataReducer
  });