import React, { Component } from 'react';

//Redux
import store from './src/stores';
import { Provider } from 'react-redux';

import DogPage from './src/pages/dog-page';

export default class App extends Component {
  render() {
    return (
      // Redux: Global Store
      <Provider store={store}>
        <DogPage />
      </Provider>
    )
  }
}