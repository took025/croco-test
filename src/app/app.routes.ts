import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "slots",
    loadChildren: () =>
      import("./components/slots/slots.module").then((m) => m.SlotsModule),
  },
  {
    path: "",
    redirectTo: "slots",
    pathMatch: "full",
  },
];
