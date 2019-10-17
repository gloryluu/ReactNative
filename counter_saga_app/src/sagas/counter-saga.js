import { INCREASE_ASYNC, INCREASE, DECREASE, DECREASE_ASYNC } from "../actions/action-types";
import { counterIncrease } from '../actions'

import { takeLatest, takeEvery, throttle, put, cancel, fork, take, delay } from 'redux-saga/effects';

// 2.2
function* incrementAsync() {
    yield delay(1000)
    yield put({ type: INCREASE})
}

function* decrementAsync() {
    yield delay(1000)
    yield put({ type: DECREASE})
}

// 2.1
export function* watchIncrementAsync() {
    yield takeEvery(INCREASE_ASYNC, incrementAsync);
}

// 2.1
export function* watchDecrementAsync() {
    yield takeEvery(DECREASE_ASYNC, decrementAsync);
}