import {all, fork,takeLatest} from 'redux-saga/effects';

import socketSaga from './socketSaga';
import getExchanges from './exchangesSaga';
import {ActionTypes} from '../actions/constantsAction';

export default function* rootSaga() {
  yield all([
    fork(socketSaga),
    takeLatest(ActionTypes.GET_EXCHANGES,getExchanges)
  ]);
}