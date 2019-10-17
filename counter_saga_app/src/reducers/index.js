import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';

const allReducer = combineReducers({
    counter: counterReducer // all can call as this.props.counter.
    //you can add more reducers here, separated by , !
});

export default allReducer;