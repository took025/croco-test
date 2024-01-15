import { createAction, props } from "@ngrx/store";

export const incriment = createAction("incriment");
export const decriment = createAction("decriment");
export const reset = createAction("reset");
export const customIncriment = createAction(
  "customIncriment",
  props<{ value: number }>()
);
export const changeChaneelName = createAction(
  "changeChaneelName",
  props<{ value: string }>()
);
