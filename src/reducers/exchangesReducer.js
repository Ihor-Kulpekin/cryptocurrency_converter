import {handleActions} from 'redux-actions';
import {getExchanges, getExchangesFailure, getExchangesSuccess} from "../actions/actions";

const initialState = {
  priceExchange:{},
  error:false
};

export default {
  cryptoExchange:handleActions({
    [getExchanges]:(state)=>{
      return{
        ...state
      }
    },
    [getExchangesSuccess]:(state,{payload})=>{
      return{
        ...state,
        priceExchange: payload[0],
        error:false
      }
    },
    [getExchangesFailure]:(state)=>{
      return{
        ...state,
        error:true
      }
    }
  },initialState)
}