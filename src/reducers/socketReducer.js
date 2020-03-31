import {handleActions} from 'redux-actions';

import {messageSocket, messageSocketSuccess, messageSocketFailure} from '../actions/actions';
import CCC from '../utils/streamer-util'

const initialState = {
  error: false,
  cryptocurrencies: []
};

export default {
  cryptocurrencies: handleActions({
    [messageSocket]: (state) => {
      return {
        ...state
      }
    },
    [messageSocketSuccess]: (state, {payload}) => {
      const cryptoscurrenciesLocal = [...state.cryptocurrencies];
      const unpackPair = CCC.CURRENT.unpack(payload);
      const currentPricePair = CCC.CURRENT.dataUnpack(unpackPair);
      const indexOfCrypto = cryptoscurrenciesLocal.indexOf(currentPricePair);

      if(indexOfCrypto===-1){
        cryptoscurrenciesLocal.push(currentPricePair)
      }else {
        cryptoscurrenciesLocal[indexOfCrypto] = currentPricePair;
      }

      return {
        ...state,
        error: false,
        cryptocurrencies:cryptoscurrenciesLocal
      }
    },
    [messageSocketFailure]: (state) => {
      return {
        ...state,
        error: true
      }
    }
  }, initialState)
}