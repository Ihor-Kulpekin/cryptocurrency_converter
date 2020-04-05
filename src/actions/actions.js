import {createAction} from 'redux-actions';

import {ActionTypes} from './constantsAction';

export const messageSocket = createAction(ActionTypes.MESSAGE_SOCKET_CONNECTION);
export const messageSocketSuccess = createAction(ActionTypes.MESSAGE_SOCKET_INCOMING_EVENT, (payload) => payload);
export const messageSocketFailure = createAction(ActionTypes.MESSAGE_SOCKET_FAILURE, (payload) => payload);

export const getExchanges = createAction(ActionTypes.GET_EXCHANGES, (payload) => payload);
export const getExchangesSuccess = createAction(ActionTypes.GET_EXCHANGES_SUCCESS, (payload) => payload);
export const getExchangesFailure = createAction(ActionTypes.GET_EXCHANGES_FAILURE, (payload) => payload);

export const getObjectFromComponent = createAction(ActionTypes.GET_OBJECT_FROM_COMPONENT,(payload)=>payload);
export const getObjectFromComponentSuccess = createAction(ActionTypes.GET_OBJECT_FROM_COMPONENT_SUCCESS,(payload)=>payload);
export const getObjectFromComponentFailure = createAction(ActionTypes.GET_OBJECT_FROM_COMPONENT_FAILURE,(payload)=>payload);