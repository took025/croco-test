import { Component, HostListener, computed, signal } from "@angular/core";
import { SignalsHeaderComponent } from "./signals-header/signals-header.component";
import { SignalsFooterComponent } from "./signals-footer/signals-footer.component";
import { SignalsMainComponent } from "./signals-main/signals-main.component";
import { SignalsService } from "../../core/signals.service";
import { CommonModule, NgFor } from "@angular/common";
import { Observable } from "rxjs";
import { ScrollPositionComponent } from "../scroll-position/scroll-position.component";

@Component({
  selector: "app-signals",
  standalone: true,
  imports: [
    SignalsHeaderComponent,
    SignalsFooterComponent,
    SignalsMainComponent,
    NgFor,
    CommonModule,
    ScrollPositionComponent,
  ],
  templateUrl: "./signals.component.html",
  styleUrl: "./signals.component.scss",
})
export class SignalsComponent {
  scrollCount: number = 0;
  previousScrollTop: number = 0;
  items: { id: number; text: string }[] = [
    {
      id: 1,
      text: "text",
    },
    {
      id: 1,
      text: "text",
    },
    {
      id: 1,
      text: "text",
    },
    {
      id: 1,
      text: "text",
    },
    {
      id: 1,
      text: "text",
    },
    {
      id: 1,
      text: "text",
    },
  ];

  articlesSignal = computed(() => {
    return this.signalSerice.articlesSig();
  }) as any;

  cartsig = this.signalSerice.cartsSignal;
  $todos: Observable<any> = this.signalSerice.getDotos();
  constructor(public signalSerice: SignalsService) {}

  todosSignal = signal([]);
  ngOnInit(): void {
    this.signalSerice.getDotos().subscribe((res) => {
      this.todosSignal.set(res);
    });
  }

  onSearch(e) {
    const value = {
      email: (e.target as HTMLInputElement).value,
    };
    this.signalSerice.searchSig.set((e.target as HTMLInputElement).value);
    this.signalSerice.cartsSignal.update((item) => [...item, value]);
    console.log(this.signalSerice.articlesSig(), this.articlesSignal());
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event: Event): void {
    this.scrollCount = window.pageYOffset || document.documentElement.scrollTop;
    let scroll = 0;
    if (this.scrollCount >= 2140) {
      scroll++;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {}
}
