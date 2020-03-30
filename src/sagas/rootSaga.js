import {takeEvery} from 'redux-saga/effects';

import socketSaga from './socketSaga';
import {ActionTypes} from "../actions/constantsAction";

export default function* rootSaga() {
  yield takeEvery(ActionTypes.MESSAGE_SOCKET_CONNECTION, socketSaga);
}