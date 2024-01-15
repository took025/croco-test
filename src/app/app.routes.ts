import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "slots",
    loadComponent: () =>
      import("./components/slots/slots.component").then(c => c.SlotsComponent),
  },
  {
    path: "counter",
    loadComponent: () =>
      import("./components/counter/counter/counter.component").then(c => c.CounterComponent),
  },
  {
    path: "log-in",
    loadComponent: () =>
      import("./components/login/login.component").then(c => c.LoginComponent),
  },
  {
    path: "",
    redirectTo: "log-in",
    pathMatch: "full",
  },
];
