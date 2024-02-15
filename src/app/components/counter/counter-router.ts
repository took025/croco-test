import { Routes } from "@angular/router";

export const testRoutes: Routes = [
  {
    path: "",
    title: "First component",
    loadComponent: () =>
      import("./counter-buttons/counter-buttons.component").then(
        (c) => c.CounterButtonsComponent
      ),
  },
];
