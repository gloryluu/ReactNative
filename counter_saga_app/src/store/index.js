import { createStore, applyMiddleware } from 'redux';

import allReducer from '../reducers';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    allReducer,
    {},
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, logger)
    )
);

sagaMiddleware.run(rootSaga);

export default store;