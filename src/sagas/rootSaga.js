import {takeEvery,takeLatest,all} from 'redux-saga/effects';

import socketSaga from './socketSaga';
import {ActionTypes} from '../actions/constantsAction';

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.MESSAGE_SOCKET_CONNECTION,socketSaga),
  ]);
}