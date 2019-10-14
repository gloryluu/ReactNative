import React, { Component } from 'react';

//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducer from './reducers';
import Counter from './components/counter-page';

let store = createStore(
  allReducer,
  {},
)

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