import { INCREASE, DECREASE } from '../actions/types'

export default function repoReducer(state = { repos: [] }, action) {
    switch (action.type) {
        case GET_REPOS:
            return { ...state, loading: true };
        case GET_REPOS_SUCCESS:
            return { ...state, loading: false, repos: action.payload.data };
        case GET_REPOS_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching repositories'
            };
        default:
            return state;
    }
}
export default repoReducer