import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILED } from './action-types';

export const apiCallRequest = () => ({ type: API_CALL_REQUEST });
export const apiCallSuccess = () => ({ type: API_CALL_SUCCESS });
export const apiCallFailure = () => ({ type: API_CALL_FAILED });