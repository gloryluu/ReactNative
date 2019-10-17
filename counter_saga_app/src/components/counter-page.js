import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

import Child from './child-label';

import { counterIncrease, counterDecrease, counterIncreaseAsync, counterDecreaseAsync, counterIncreasePayload } from '../actions'

import { connect } from 'react-redux'

class Counter extends Component {

    //Call click event => use "Container"
    handleIncrease = () => this.props.onIncreaseButtonTapped();
    handleDecrease = () => this.props.onDecreaseButtonTapped();
    handleIncreaseWithDelay = () => this.props.onIncreaseDelayButtonTapped();
    handleDereaseWithDelay = () => this.props.onDecreaseDelayButtonTapped();
    handleIncreaseWithPayload = () => this.props.onIncreaseWithPayloadButtonTapped(2);

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
                    <Button
                        buttonStyle={{ marginHorizontal: 10, marginBottom: 10, backgroundColor: 'red' }}
                        titleStyle={{ color: '#fff' }}
                        title='Increase w/ Delay'
                        onPress={this.handleIncreaseWithDelay}
                    />
                    <Button
                        buttonStyle={{ marginHorizontal: 10, marginBottom: 10, backgroundColor: 'green' }}
                        titleStyle={{ color: '#fff' }}
                        title='Decrease w/ Delay'
                        onPress={this.handleDereaseWithDelay}
                    />
                    <Button
                        buttonStyle={{ marginHorizontal: 10, marginBottom: 10, backgroundColor: 'coral' }}
                        titleStyle={{ color: '#fff' }}
                        title='Increase w/ Payload'
                        onPress={this.handleIncreaseWithPayload}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseButtonTapped: () => {
            dispatch(counterIncrease());
        },
        onDecreaseButtonTapped: () => {
            dispatch(counterDecrease());
        },
        onIncreaseWithPayloadButtonTapped: (number) => {
            dispatch(counterIncreasePayload(number));
        },
        onIncreaseDelayButtonTapped: () => {
            dispatch(counterIncreaseAsync());
        },
        onDecreaseDelayButtonTapped: () => {
            dispatch(counterDecreaseAsync())
        }
    }
};

export default connect(null, mapDispatchToProps)(Counter);
