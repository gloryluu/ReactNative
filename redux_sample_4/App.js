import React, { Component } from 'react';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import allReducer from './reducers';

import Counter from './components/counter-page';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  allReducer,
  {},
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default class App extends Component {
  render() {
    return (
      // Redux: Global Store
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}