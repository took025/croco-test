import { createAction, props } from "@ngrx/store";

export const login = createAction(
  "login",
  props<{ payload: userInfo }>()
);

export interface userInfo {
  name: string;
  surrName: string;
  password: string;
}
