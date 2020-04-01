import {handleActions} from 'redux-actions';

import {messageSocket, messageSocketFailure, messageSocketSuccess} from '../actions/actions';
import CCC from '../utils/streamer-util'

const initialState = {
  error: false,
  cryptocurrencies: [],
  cryptocurrenciesPrice: []
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

      const cryptocurrenciesPrice = cryptoscurrenciesLocal.map((item) => {
        return {
          symbol: item.FROMSYMBOL,
          price: item.PRICE
        };
      });

      if (indexOfCrypto === -1) {
        cryptoscurrenciesLocal.push(currentPricePair)
      } else {
        cryptoscurrenciesLocal[indexOfCrypto] = currentPricePair;
      }

      return {
        ...state,
        error: false,
        cryptocurrencies: cryptoscurrenciesLocal,
        cryptocurrenciesPrice: cryptocurrenciesPrice
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