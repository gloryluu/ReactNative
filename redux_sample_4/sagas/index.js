import {watchIncrementAsync} from './counter-saga';


export default function* () {
    yield [
        watchIncrementAsync(),
    ]
}