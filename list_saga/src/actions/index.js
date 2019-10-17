import { GET_REPOS } from './types';

export const listRepos = () => ({
    type: GET_REPOS,
    payload: {
        request: {
            url: `/users/${user}/repos`
        }
    }
});