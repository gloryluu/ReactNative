import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

import Child from './component/child';

import {counterIncrease, counterDecrease} from '../actions'

import { connect } from 'react-redux'

class Counter extends Component {

    //Call click event => use "Container"
    handleIncrease = () => {
        this.props.onIncreaseButtonTapped();
    };

    handleDecrease = () => {
        this.props.onDecreaseButtonTapped();
    };

    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Child />
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        buttonStyle={{ marginHorizontal: 10, marginBottom: 10, backgroundColor: '#397af8', }}
                        titleStyle={{ color: '#fff' }}
                        title='Increase'
                        onPress={this.handleIncrease}
                    />
                    <Button
                        buttonStyle={{ marginHorizontal: 10, marginBottom: 10, backgroundColor: 'orange' }}
                        titleStyle={{ color: '#fff' }}
                        title='Decrease'
                        onPress={this.handleDecrease}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseButtonTapped: () => {
            dispatch(counterIncrease());
        },
        onDecreaseButtonTapped: () => {
            dispatch(counterDecrease());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
 