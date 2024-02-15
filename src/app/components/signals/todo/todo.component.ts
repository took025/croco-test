import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { TodoInterface } from "../../../core/interface";
import { NgClass, NgIf } from "@angular/common";
import { SignalsService } from "../../../core/signals.service";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: "./todo.component.html",
  styleUrl: "../signals.component.scss",
})
export class TodoComponent {
  @Input({ required: true }) todo!: TodoInterface;
  @Input({ required: true }) isEditing!: boolean;
  @Output() setEditingId: EventEmitter<string | null> = new EventEmitter();
  editingText: string = "";
  todoService = inject(SignalsService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.editingText = this.todo.text;
  }
  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }
  changeTodo() {
    this.todoService.changeTodo(this.todo.id, this.editingText);
    this.setEditingId.emit(null);
  }
  setTodo() {
    this.setEditingId.emit(this.todo.id);
  }
  removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }

  toggleTodo(): void {
    this.todoService.toggleTodo(this.todo.id);
  }
}
