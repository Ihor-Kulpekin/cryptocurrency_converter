import {call, put, delay, apply, take, fork, race} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {messageSocket, messageSocketFailure, messageSocketSuccess} from '../actions/actions';
import {handleStartStream} from "../api/apiSocket";
import {subscription} from "../api/constants";
import CCC from "../utils/streamer-util";


const createSocketChannel = () => {
  let socket;
  return eventChannel((emit) => {
    const createWS = () => {
      socket = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=69e0cbfdd2b594ada2f9ccad63d21b1fbb349411f0fbb8f1043b9cbf5f14832c');
      socket.onopen = () => {
        const subRequest = {
          "action": "SubAdd",
          "subs": subscription
        };
        socket.send(JSON.stringify(subRequest));
      };

      socket.onmessage = ({data}) => {
        const messageData = JSON.parse(data);
        if (messageData.TYPE === CCC.TYPE.CURRENTAGG) {
          return emit(messageData)
        }
      };

    };
    createWS();

    return socket.onclose = () => {
      const subRequest = {
        "action": "SubRemove",
        "subs": subscription
      };
      socket.send(JSON.stringify(subRequest));
    }
  })
};

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