import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from '../actions/action-types'

const initialState = {
    fetching: false,
    dog: null,
    error: null
};

const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null
            };
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                dog: action.dog
            };
        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                dog: action.dog
            };
        default:
            return state;
    }
}

export default dogReducer