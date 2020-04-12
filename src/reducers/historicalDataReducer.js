import {handleActions} from 'redux-actions';

import {getHistoricalData, getHistoricalDataFailure, getHistoricalDataSuccess} from '../actions/actions';

const initialState = {
  error: false,
  historicalData: []
};

export default {
  historicalData: handleActions({
    [getHistoricalData]: (state) => {
      return {
        ...state,
        error: false
      }
    },
    [getHistoricalDataSuccess]: (state, {payload}) => {
      debugger
      return {
        ...state,
        historicalData: payload.Data.Data,
        error: false
      }
    },
    [getHistoricalDataFailure]: (state) => {
      return {
        ...state,
        error: true
      }
    }
  },initialState)
}