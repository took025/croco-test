import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterState = createFeatureSelector<CounterState>('counter');


// for many here onlu returs exact value 
export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
    return state.channelName;
});