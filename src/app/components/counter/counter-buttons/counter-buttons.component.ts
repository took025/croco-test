import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { decriment, incriment, reset } from "../state/counter.actions";
import { TestComponent } from "../../../shared/components/test/test.component";
import { ExponentialStrengthPipe } from "../../../shared/pipes/greetPipe";

@Component({
  selector: "app-counter-buttons",
  standalone: true,
  imports: [CommonModule, TestComponent, ExponentialStrengthPipe],
  templateUrl: "./counter-buttons.component.html",
  styleUrl: "./counter-buttons.component.scss",
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  Incriment() {
    this.store.dispatch(incriment());
  }
  Decriment() {
    this.store.dispatch(decriment());
  }
  Reset() {
    this.store.dispatch(reset());
  }
}
