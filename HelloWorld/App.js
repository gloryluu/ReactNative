/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  FlatList,
  ActivityIndicator,
  View,
  async,
} from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Hello, world!</Text>
//       </View>
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Banana.png'
//     };
//     return (
//       <Image source={pic} style={{width:160, height:193}}/>
//     );
//   }
// }

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text>Hello {this.props.name}</Text>
//       </View>
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top: 50}}>
//         <Greeting name="Quang" />
//         <Greeting name="Thuan" />
//         <Greeting name="An" />
//       </View>
//     );
//   }
// }

// class Blink extends Component {
//   state = {isShowingText: true};

//   componentDidMount() {
//     // Toggle the state every second
//     setInterval(
//       () =>
//         this.setState(previousState => ({
//           isShowingText: !previousState.isShowingText,
//         })),
//       1000,
//     );
//   }

//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }
//     return <Text>{this.props.text}</Text>;
//   }
// }

// export default class App extends Component {
//   render() {
//     return <View>
//       <Blink text='I love to blink'></Blink>
//       <Blink text='Yes blinking is so great' />
//       <Blink text='Why did they ever take this out of HTML' />
//       <Blink text='Look at me look at me look at me' />
//     </View>;
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View style={{flex: 20, backgroundColor: 'powderblue'}}></View>
//         <View style={{flex: 30, backgroundColor: 'skyblue'}}></View>
//         <View style={{flex: 50, backgroundColor: 'steelblue'}}></View>
//       </View>
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{flex: 1, flexDirection: 'column', alignItems:'flex-start'}}>
//         <View style={{width:50, height:50, backgroundColor: 'powderblue', alignSelf:'flex-end'}}></View>
//         <View style={{width:50, height:50, backgroundColor: 'skyblue'}}></View>
//         <View style={{width:50, height:50, backgroundColor: 'steelblue'}}></View>
//       </View>
//     );
//   }
// }

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {text:''}
//   }

//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={text => this.setState({text})}
//           value={this.state.text}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text
//             .split(' ')
//             .map(word => word && '🍕')
//             .join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }

// export default class App extends Component {
//   _onPressButton() {
//     alert('You tapped the button!');
//   }

//   _onLongPressButton() {
//     alert('You long-pressed the button!');
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//           onPress={this._onPressButton}
//           background={
//             Platform.OS === 'android'
//               ? TouchableNativeFeedback.SelectableBackground()
//               : ''
//           }>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>
//               TouchableNativeFeedback{' '}
//               {Platform.OS !== 'android' ? '(Android only)' : ''}
//             </Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight
//           onPress={this._onPressButton}
//           onLongPress={this._onLongPressButton}
//           underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center',
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3',
//   },
//   buttonText: {
//     textAlign: 'center',
//     padding: 20,
//     color: 'white',
//   },
// });

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://facebook.github.io/react-native/movies.json');
      const responseJson = await response.json();
      // this.setState({
      //   isLoading: false,
      //   dataSource: responseJson.movies,
      // }, function () {
      // });

      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
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
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
            keyExtractor={({ id }, index) => id}
          />
        </View>
      </View>
    );
  }
}
