import { Component } from "@angular/core";
import { HighlightPipe } from "./search.pipe";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  takeUntil,
} from "rxjs";
import { SignalsService } from "../../core/signals.service";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightPipe, ReactiveFormsModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.scss",
})
export class SearchComponent {
  private sub$: Subject<void> = new Subject<void>();
  searchForm: FormGroup;
  searchTerm: string;
  items: string[] = [
    "Lorem ipsum dolor sit amet",
    "consectetur adipiscing elit",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  ];

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchInput: new FormControl("", Validators.required),
    });

    this.searchForm.controls.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value: string) => this.service.searchItem(value)),
        takeUntil(this.sub$)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  searchFunction(value: string) {
    this.service.searchItem(value).subscribe((res) => {
      console.log(res);
      return res;
    });
  }

  constructor(private service: SignalsService) {}

  ngOnDestroy(): void {
    this.sub$.next();
    this.sub$.complete();
  }
}
