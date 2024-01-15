import { CommonModule } from "@angular/common";
import { Component, Input, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CounterState } from "../state/counter.state";
import { getChannelName, getCounter } from "../state/counter.selector";

@Component({
  selector: "app-counter-output",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./counter-output.component.html",
  styleUrl: "./counter-output.component.scss",
})
export class CounterOutputComponent {
  private store = inject(Store);
  counter: number;
  constructor() {}
  ngOnInit(): void {
    this.store.select(getCounter).subscribe((res) => {
      this.counter = res;
    });
  }
}
