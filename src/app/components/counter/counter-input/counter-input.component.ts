import { Component, inject } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { changeChaneelName, customIncriment } from "../state/counter.actions";
import { CounterState } from "../state/counter.state";
import { getChannelName } from "../state/counter.selector";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-counter-input",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: "./counter-input.component.html",
  styleUrl: "./counter-input.component.scss",
})
export class CounterInputComponent {
  value:number;
  channelName$: Observable<string>;
  private store = inject(Store<{counter: CounterState}>);

  onAdd() {
    this.store.dispatch(customIncriment({ value: +this.value }));
    this.value = null
  }

  changeChaneel() {
    this.store.dispatch(changeChaneelName({ value: 'this.channelName$' }));

  }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName)
  }
}
