import { isDevMode } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { logInRrducer } from "../../login/login-state/log-in.reducer";

export interface State {}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  login: logInRrducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
