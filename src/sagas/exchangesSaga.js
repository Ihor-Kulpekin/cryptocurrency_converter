import {call, put} from 'redux-saga/effects';

import {getExchanges as apiGetExchanges} from '../restApi/exchangesApi';
import {getExchangesFailure, getExchangesSuccess} from '../actions/actions';

export default function* getExchange({payload}) {
  try {
    const result = yield call(apiGetExchanges, payload);
    yield put(getExchangesSuccess(result))
  } catch (error) {
    console.log(error);
    yield put(getExchangesFailure(error))
  }
}
