import { watchIncrementAsync, watchDecrementAsync } from './counter-saga';
import { all, fork } from 'redux-saga/effects';

export default function* () {
    yield all([fork(watchIncrementAsync), fork(watchDecrementAsync)]);
}