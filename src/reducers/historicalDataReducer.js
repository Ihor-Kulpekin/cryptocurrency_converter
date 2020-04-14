import {handleActions} from 'redux-actions';

import {getHistoricalData, getHistoricalDataFailure, getHistoricalDataSuccess} from '../actions/actions';

const initialState = {
  error: false,
  historicalData: [],
  months:['January','February','March','April','May','June','July','August','September','October','November','December']
};

export default {
  historicalData: handleActions({
    [getHistoricalData]: (state) => {
      return {
        ...state,
        error: false,
      }
    },
    [getHistoricalDataSuccess]: (state, {payload}) => {
      const {months} = state;
      const arrayHistoricalData = payload.Data.Data.map((item)=>{
        const date = new Date(item.time*1000);
        const month = months[date.getMonth()];
        const dayMonth = date.getDate();
        item.time = month+' '+dayMonth;
        return item;
      });

      return {
        ...state,
        historicalData:arrayHistoricalData,
        error: false
      }
    },
    [getHistoricalDataFailure]: (state) => {
      return {
        ...state,
        error: true
      }
    }
  }, initialState)
}