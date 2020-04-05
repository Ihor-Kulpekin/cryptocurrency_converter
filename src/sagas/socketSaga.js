import {call, put, take, fork} from 'redux-saga/effects';

import {messageSocket, messageSocketSuccess} from '../actions/actions';
import {createSocketChannel} from '../socketApi/socketApi';

function* initializeWebSocketChannel() {
  const channel = yield call(createSocketChannel);
  while (true) {
    const data = yield take(channel);
    yield put(messageSocketSuccess(data))
  }
}

export default function* socketSaga() {
  while (true) {
    yield take(messageSocket);
    yield fork(initializeWebSocketChannel);
  }
}