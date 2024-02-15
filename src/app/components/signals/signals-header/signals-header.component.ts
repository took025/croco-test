import { Component, inject } from "@angular/core";
import { SignalsService } from "../../../core/signals.service";

@Component({
  selector: "app-signals-header",
  standalone: true,
  imports: [],
  templateUrl: "./signals-header.component.html",
  styleUrl: "../signals.component.scss",
})
export class SignalsHeaderComponent {
  todoService = inject(SignalsService);
  text: string = "";
  changeText(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo(): void {
    this.todoService.addTodo(this.text);
    this.text = "";
    console.log(this.todoService.toDoSiig());
  }
}
