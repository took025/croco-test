import { createReducer, on } from "@ngrx/store";
import { login } from "./log-in.action";
import { initialLoginlState } from "./log-in.state";

const _logInRrducer = createReducer(
  initialLoginlState,
  on(login, (state, action) => {
    return {
      ...state,
      name: action.payload.name,
      surrName: action.payload.surrName,
      password: action.payload.password,
    };
  })
);
export function logInRrducer(state, action) {
  return _logInRrducer(state, action);
}
