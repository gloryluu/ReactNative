import {INCREASE, INCREASE_ASYNC, DECREASE, DECREASE_ASYNC} from './action-types';

export const counterIncrease = () => ({type:INCREASE});
export const counterIncreaseAsync = () => ({type:INCREASE_ASYNC});
export const counterDecrease = () => ({type:DECREASE});
export const counterDecreaseAsync = () => ({type:DECREASE_ASYNC});