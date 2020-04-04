import createSagaMiddleware from 'redux-saga';
import {createStore, compose, applyMiddleware} from 'redux';

import rootReducer from '../reducers/rootReducer';
import * as rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const sagaConnect = ()=>Object.values(rootSaga).map(saga=>sagaMiddleware.run(saga));

const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = composeEnhancers(
  applyMiddleware(
    sagaMiddleware
  )
);
const createStoreWithMiddleware = middleware(createStore);

const store = createStoreWithMiddleware(rootReducer);

sagaConnect();

export default store;