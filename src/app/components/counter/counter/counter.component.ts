import { Component } from "@angular/core";
import { CounterOutputComponent } from "../counter-output/counter-output.component";
import { CounterButtonsComponent } from "../counter-buttons/counter-buttons.component";
import { Store } from "@ngrx/store";
import { CounterInputComponent } from "../counter-input/counter-input.component";
import { TestComponent } from "../../../shared/components/test/test.component";

@Component({
  selector: "app-counter",
  standalone: true,
  imports: [
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterInputComponent,
    TestComponent,
  ],
  templateUrl: "./counter.component.html",
  styleUrl: "./counter.component.scss",
})
export class CounterComponent {
  // counter: number = 0;
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  onIncriment() {
    // this.counter++;
  }
  onDecriment() {
    // this.counter--;
  }
  onReset() {
    // this.counter = 0;
  }
}
