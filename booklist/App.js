/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BookListPage from './components/book_list_page'
import BookDetailPage from './components/book_detail_page'

const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
  BookListPage: { screen: BookListPage },
  //First entry by default be our first screen 
  //if we do not define initialRouteName
  BookDetailPage: { screen: BookDetailPage },
},
  {
    initialRouteName: 'BookListPage',
  }
);
export default createAppContainer(App);