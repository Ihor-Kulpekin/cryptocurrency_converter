import {eventChannel} from 'redux-saga';

import {subscription} from './constants';
import CCC from '../utils/streamer-util';


export const createSocketChannel = () => {
  let socket;
  return eventChannel((emit) => {
    const createWS = () => {
      socket = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=0a2d655449b7a670979333472cbcc4e51b8632806bd9345e16559b7b205cc6a4');
      socket.onopen = () => {
        const subRequest = {
          "action": "SubAdd",
          "subs": subscription
        };
        socket.send(JSON.stringify(subRequest));
      };

      socket.onmessage = ({data}) => {
        const messageData = JSON.parse(data);
        if (messageData.TYPE === CCC.TYPE.CURRENTAGG && messageData.FLAGS !== 4) {
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