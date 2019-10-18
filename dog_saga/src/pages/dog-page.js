import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text
} from 'react-native';
import { Button, Image } from 'react-native-elements';
import { connect } from 'react-redux'
import { apiCallRequest } from '../actions';

class DogPage extends Component {

    constructor(props) {
        super(props);
        console.log('initialization');
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Button
                    buttonStyle={{ margin: 10, backgroundColor: '#397af8', }}
                    titleStyle={{ color: '#fff' }}
                    title='Request a dog'
                    onPress = {this.requestADog}
                />
                {this.props.fetching ? (<Text>'Fetching...'</Text>):(<Text>'Fetched!!!'</Text>)}
                <Image
                    source={{ uri: this.props.dog }}
                    style={{ width: 200, height: 200 }}
                />
            </SafeAreaView>
        );
    }

    requestADog = () => this.props.onRequestButtonTapped();
}

const mapStateToProps = state => {
    return {
        fetching: state.dogPageState.fetching,
        dog: state.dogPageState.dog,
        error: state.dogPageState.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestButtonTapped: () => dispatch(apiCallRequest())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DogPage);