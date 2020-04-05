import {handleActions} from 'redux-actions';

import {getObjectFromComponent, getObjectFromComponentFailure, getObjectFromComponentSuccess} from '../actions/actions';

const initialState = {
  objectTable: {},
  error: false
};

export default {
  objectFromComponent: handleActions({
    [getObjectFromComponent]: (state) => {
      return {
        ...state,
        error: false
      }
    },
    [getObjectFromComponentSuccess]: (state, {payload}) => {
      return {
        ...state,
        objectTable: payload,
        error: false,
      }
    },
    [getObjectFromComponentFailure]: (state) => {
      return {
        ...state,
        error: true
      }
    }
  },initialState)
}