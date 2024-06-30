import { Injectable, signal } from "@angular/core";
import { FilterEnum, TodoInterface } from "./interface";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  share,
  switchMap,
} from "rxjs";
import { HttpBackend, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SignalsService {
  private http: HttpClient;
  url = "https://jsonplaceholder.typicode.com/comments?email=";
  searchSig = signal<string>("");
  articles$ = toObservable(this.searchSig).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((searcchValue) => this.http.get(`${this.url}${searcchValue}`))
  );
  articlesSig = toSignal(this.articles$);

  cartsSignal = signal([]);

  toDoSiig = signal<TodoInterface[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.all);
  testsig = signal<any>("");
  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

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

  searchItem(searchText: string): Observable<any> {
    return this.http.get(`${this.url}${searchText}`);
  }

  getDotos(): Observable<any> {
    return this.http
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .pipe(share());
  }
}
