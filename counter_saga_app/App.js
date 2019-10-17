import React, { Component } from 'react';

//Redux
import store from './src/store';
import { Provider } from 'react-redux';

import Counter from './src/components/counter-page';

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