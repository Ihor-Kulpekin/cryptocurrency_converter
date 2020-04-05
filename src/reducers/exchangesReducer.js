import {handleActions} from 'redux-actions';

import {getExchanges, getExchangesFailure, getExchangesSuccess} from '../actions/actions';

const initialState = {
  error: false,
  exchanges: {}
};

export default {
  cryptoExchange: handleActions({
    [getExchanges]: (state) => {
      return {
        ...state
      }
    },
    [getExchangesSuccess]: (state, {payload}) => {
      return {
        ...state,
        exchanges: payload,
        error: false
      }
    },
    [getExchangesFailure]: (state) => {
      return {
        ...state,
        error: true
      }
    }
  }, initialState)
}