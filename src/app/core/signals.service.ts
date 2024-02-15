import { Injectable, signal } from "@angular/core";
import { FilterEnum, TodoInterface } from "./interface";

@Injectable({
  providedIn: "root",
})
export class SignalsService {
  toDoSiig = signal<TodoInterface[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.all);
  constructor() {}

  changeFilter(filterName: FilterEnum): void {
    this.filterSig.set(filterName);
  }

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };
    this.toDoSiig.update((todos) => [...todos, newTodo]);
  }

  changeTodo(id: string, text: string) {
    this.toDoSiig.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }

  toggleTodo(id: string) {
    this.toDoSiig.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  removeTodo(id: string): void {
    this.toDoSiig.update((todos) => todos.filter((todo) => todo.id !== id));
  }

  toggleAll(isCompleted: boolean): void {
    this.toDoSiig.update((todos) =>
      todos.map((todo) => ({ ...todo, isCompleted }))
    );
  }
}
