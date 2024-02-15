import { NgClass } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { SignalsService } from "../../../core/signals.service";
import { FilterEnum } from "../../../core/interface";

@Component({
  selector: "app-signals-footer",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./signals-footer.component.html",
  styleUrl: "../signals.component.scss",
})
export class SignalsFooterComponent {
  todoService = inject(SignalsService);
  filterEnum = FilterEnum;
  filterSig = this.todoService.filterSig;

  activeCount = computed(() => {
    return this.todoService.toDoSiig().filter((todo) => !todo.isCompleted)
      .length;
  });
  noTodosClass = computed(() => this.todoService.toDoSiig.length === 0);
  itemsLeftText = computed(
    () => `item${this.activeCount() !== 1 ? "s" : ""} left`
  );

  changeFilter(eent: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todoService.changeFilter(filterName);
  }
}
