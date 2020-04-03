import {eventChannel} from 'redux-saga';

import {subscription} from './constants';
import CCC from '../utils/streamer-util';


export const createSocketChannel = () => {
  let socket;
  return eventChannel((emit) => {
    const createWS = () => {
      socket = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=1f4ae587c6f65d19a74ee93973885f0a7d4fc60e75ce7a567e069bde037663b0');
      socket.onopen = () => {
        const subRequest = {
          "action": "SubAdd",
          "subs": subscription
        };
        socket.send(JSON.stringify(subRequest));
      };

      socket.onmessage = ({data}) => {
        const messageData = JSON.parse(data);
        if (messageData.TYPE === CCC.TYPE.CURRENTAGG &&messageData.FLAGS!==4) {
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