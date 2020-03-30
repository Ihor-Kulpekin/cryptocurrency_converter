import {combineReducers} from 'redux';

import socketReducer from './socketReducer';

export default combineReducers({...socketReducer});