import { combineReducers } from 'redux';
import reducer from './reducer';

const allReducer = combineReducers({
    repo: reducer
    //you can add more reducers here, separated by , !
});

export default allReducer;