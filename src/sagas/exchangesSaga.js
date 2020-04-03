import {call, put} from 'redux-saga/effects';

import {getExchanges as apiGetExchanges} from '../restApi/exchangesApi';
import {getExchangesFailure, getExchangesSuccess} from "../actions/actions";

export default function* getExchange(payload) {
  debugger
  try {
    const result = yield call(apiGetExchanges);
    yield put(getExchangesSuccess(result))
  } catch (error) {
    yield put(getExchangesFailure(error))
  }
}