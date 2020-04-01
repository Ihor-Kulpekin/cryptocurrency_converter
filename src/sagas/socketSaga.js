import {call, put, take, fork} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import {messageSocket, messageSocketSuccess} from '../actions/actions';
import {subscription} from "../socketApi/constants";
import CCC from "../utils/streamer-util";


const createSocketChannel = () => {
  let socket;
  return eventChannel((emit) => {
    const createWS = () => {
      socket = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=472acc686258651c37a910904111e8b7786eebe7350c3e2d932613384e23bca6');
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