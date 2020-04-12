import {call,put} from 'redux-saga/effects';

import {getHistoricalDataSuccess,getHistoricalDataFailure} from '../actions/actions';
import {getHistoricalData} from '../restApi/historicalDataApi';

export default function* getHistoricalDataSaga({payload}) {
  try {
    const result = yield call(getHistoricalData,payload);
    yield put(getHistoricalDataSuccess(result))
  }catch (error) {
    yield put(getHistoricalDataFailure(error))
  }
}