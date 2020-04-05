import {put} from 'redux-saga/effects';
import {getObjectFromComponentFailure,getObjectFromComponentSuccess} from "../actions/actions";

export default function* getObjectFromComponent({payload}) {
  try {
    yield put(getObjectFromComponentSuccess(payload))
  } catch (error) {
    yield put(getObjectFromComponentFailure(error))
  }
}