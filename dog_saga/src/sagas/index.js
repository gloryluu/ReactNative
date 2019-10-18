import { watcherSaga } from './dog-saga';
import { all, fork } from 'redux-saga/effects';

export default function* () {
    yield all([fork(watcherSaga)]);
}