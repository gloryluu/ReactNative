import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{ flex: 1, width: '100%' }}>
        <Image source={pic} style={{ flex: 1 }} />
        <Button
          title="Solid Button" />
      </View>
    );
  }
}
