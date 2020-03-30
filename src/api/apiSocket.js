import io from 'socket.io-client';

import CCC from '../utils/streamer-util';
import {subscription} from '../api/constants';

const socket = io.connect('https://streamer.cryptocompare.com/');

export const handleStartStream = async () => {
  await socket.emit('SubAdd', {subs: subscription});
  await socket.on('m',(message)=>{
    const messageType = message.substring(0, message.indexOf('~'));
    if (messageType === CCC.TYPE.CURRENTAGG) {
       CCC.CURRENT.unpack(message);
    }
  });
  return socket;
};

export const handleStopStream = () => {
  socket.emit('SubRemove', {subs: this.state.subscription});
};

