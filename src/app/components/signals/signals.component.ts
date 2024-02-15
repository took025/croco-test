import { Component } from "@angular/core";
import { SignalsHeaderComponent } from "./signals-header/signals-header.component";
import { SignalsFooterComponent } from "./signals-footer/signals-footer.component";
import { SignalsMainComponent } from "./signals-main/signals-main.component";

@Component({
  selector: "app-signals",
  standalone: true,
  imports: [
    SignalsHeaderComponent,
    SignalsFooterComponent,
    SignalsMainComponent,
  ],
  templateUrl: "./signals.component.html",
  styleUrl: "./signals.component.scss",
})
export class SignalsComponent {}
