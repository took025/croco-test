import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "slots",
    loadComponent: () =>
      import("./components/slots/slots.component").then(c => c.SlotsComponent),
  },
  {
    path: "",
    redirectTo: "slots",
    pathMatch: "full",
  },
];
