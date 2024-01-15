import { createReducer, on } from "@ngrx/store";
import { initiallState } from "./counter.state";
import {
  changeChaneelName,
  customIncriment,
  decriment,
  incriment,
  reset,
} from "./counter.actions";

const _counterRrducer = createReducer(
  initiallState,
  on(incriment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decriment, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncriment, (state, action) => {
    console.log(action);

    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeChaneelName, (state , action) => {
    return {
      ...state,
      channelName: action.value,
    };
  })
);
export function counterReducer(state, action) {
  return _counterRrducer(state, action);
}
