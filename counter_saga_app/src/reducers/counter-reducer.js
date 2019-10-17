import { INCREASE, DECREASE, INCREASE_PAYLOAD} from '../actions/action-types'

const initialState = 0;

// const initialState = {
//     articles: []
//   };

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case INCREASE_PAYLOAD:
            return state + action.payload;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer