import {call, put, delay, apply, take, fork} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {messageSocketFailure, messageSocketSuccess} from '../actions/actions';
import {handleStartStream} from "../api/apiSocket";
import {subscription} from "../api/constants";

const createSocketChannel = (socket) => {
  return eventChannel((emit) => {
    const pingHandler = () => {
      const subrequest = {
        'action':'SubAdd',
        'subs': subscription
      };
      emit(subrequest)
    };

    return () => {
      socket.off('ping', pingHandler);
    };
  })
};

function* pong(socket) {
  yield delay(1000);
  yield apply(socket, socket.emit('SubAdd', {subs: subscription}), ['m'])
}

export default function* socketSaga() {
  const socket = yield call(handleStartStream);
  const socketChannel = yield call(createSocketChannel, socket);
  while (true) {
    try {
      debugger
      const payload = yield take(socketChannel);
      yield put(messageSocketSuccess(payload));
      yield fork(pong, socket);
    } catch (error) {
      yield put(messageSocketFailure(error))
    }
  }
}