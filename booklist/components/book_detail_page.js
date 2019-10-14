// Second screen which we will use to get the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
//import all the components we are going to use.

export default class BookDetailPage extends Component {
    static navigationOptions = {
        //Setting the header of the screen
        title: 'Book Detail',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.TextStyle}>
                <Text>{this.props.navigation.state.params.JSON_ListView_Clicked_Item}</Text>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextStyle: {
        fontSize: 23,
        textAlign: 'center',
        color: '#f00',
    },
});