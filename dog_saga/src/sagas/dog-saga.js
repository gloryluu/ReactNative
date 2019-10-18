import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILED } from "../actions/action-types";
import { takeLatest, call, takeEvery, throttle, put, cancel, fork, take, delay } from 'redux-saga/effects';
import axios from 'axios';

function fetchDog() {
    return axios({
        method: 'get',
        url: "https://dog.ceo/api/breeds/image/random"
    });
}

// 2.2
export function* workerSaga() {
    try {
        const response = yield call(fetchDog);
        const dog = response.data.message;

        yield put({ type: API_CALL_SUCCESS, dog });
    } catch (error) {
        yield put({ type: API_CALL_FAILED, error });
    }
}

// 2.1
export function* watcherSaga() {
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}