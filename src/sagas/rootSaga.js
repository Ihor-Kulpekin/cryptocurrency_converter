import {all, fork, takeLatest,takeEvery} from 'redux-saga/effects';

import {ActionTypes} from '../actions/constantsAction';
import socketSaga from './socketSaga';
import getExchanges from './exchangesSaga';
import getObjectFromComponent from './objectFromComponentSaga';

export default function* rootSaga() {
  yield all([
    fork(socketSaga),
    takeLatest(ActionTypes.GET_EXCHANGES, getExchanges),
    takeEvery(ActionTypes.GET_OBJECT_FROM_COMPONENT,getObjectFromComponent)
  ]);
}