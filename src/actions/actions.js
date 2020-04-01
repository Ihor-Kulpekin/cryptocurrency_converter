import {createAction} from 'redux-actions';

import {ActionTypes} from './constantsAction';

export const messageSocket = createAction(ActionTypes.MESSAGE_SOCKET_CONNECTION);
export const messageSocketSuccess = createAction(ActionTypes.MESSAGE_SOCKET_INCOMING_EVENT,(payload)=>payload);
export const messageSocketFailure = createAction(ActionTypes.MESSAGE_SOCKET_FAILURE,(payload)=>payload);

export const getCryptocurrencies = createAction(ActionTypes.GET_CRYPTOCURRENCIES,(payload)=>payload);
export const getCryptocurrenciesSuccess = createAction(ActionTypes.GET_CRYPTOCURRENCIES_SUCCESS,(payload)=>payload);
export const getCryptocurrenciesFailure = createAction(ActionTypes.GET_CRYPTOCURRENCIES_FAILURE,(payload)=>payload);