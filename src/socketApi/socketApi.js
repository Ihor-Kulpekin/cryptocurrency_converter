import {eventChannel} from 'redux-saga';

import {subscription} from './constants';
import CCC from '../utils/streamer-util';


export const createSocketChannel = () => {
  let socket;
  return eventChannel((emit) => {
    const createWS = () => {
      socket = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=676ef898aaade9d4a327801e5761ded6c85ab3681be42fe4e38a5dd4e2c81f98');
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