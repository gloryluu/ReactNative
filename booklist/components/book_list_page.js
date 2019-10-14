import React, { Component } from 'react';
import {
  Text,
  FlatList,
  ActivityIndicator,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class BookListPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  static navigationOptions = {
    //Setting the header of the screen
    title: 'Book List',
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://www.json-generator.com/api/json/get/ccLAsEcOSq?index=1');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.book_array,
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row' }}
        onPress={() => {
          navigate('BookDetailPage', {
            JSON_ListView_Clicked_Item: JSON.stringify(item),
          })
        }
        }
      >
        <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.image }} />
        <View style={{ flex: 1, justifyContent: 'center', marginRight: 10 }}>
          <Text style={{ fontSize: 18, color: 'green', marginBottom: 10 }}>Book {item.book_title}</Text>
          <Text style={{ fontSize: 16, color: 'red' }}>{item.author}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
