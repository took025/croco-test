import { Component, computed, inject } from "@angular/core";
import { SignalsService } from "../../../core/signals.service";
import { NgFor, NgIf } from "@angular/common";
import { FilterEnum } from "../../../core/interface";
import { TodoComponent } from "../todo/todo.component";

@Component({
  selector: "app-signals-main",
  standalone: true,
  imports: [NgFor, TodoComponent, NgIf],
  templateUrl: "./signals-main.component.html",
  styleUrl: "../signals.component.scss",
})
export class SignalsMainComponent {
  todoService = inject(SignalsService);
  edditingId: string | null = null;
  noTodoClass = computed(
    (): boolean => this.todoService.toDoSiig().length !== 0
  );
  visibleTodos = computed(() => {
    const todos = this.todoService.toDoSiig();
    const filter = this.todoService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted);
    } else {
      return todos;
    }
  });

  setEditingId(edditingId: string | null) {
    this.edditingId = edditingId;
  }

  isAlltodoSelected() {}
  toggleSelect(event: Event) {
    const target = (event.target as HTMLInputElement).checked;
    this.todoService.toggleAll(target);
  }
}
