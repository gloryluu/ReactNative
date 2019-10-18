import { combineReducers } from 'redux';
import dogReducer from './dog-reducer';

const allReducer = combineReducers({
    dogPageState: dogReducer // all can call as this.props.counter.
    //you can add more reducers here, separated by , !
});

export default allReducer;