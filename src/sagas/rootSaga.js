import {all, fork} from 'redux-saga/effects';

import socketSaga from './socketSaga';
import getExchanges from './exchangesSaga';

export default function* rootSaga() {
  yield all([
    fork(socketSaga),
    fork(getExchanges)
  ]);
}