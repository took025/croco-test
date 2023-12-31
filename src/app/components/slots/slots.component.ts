import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { Subject, takeUntil } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Providers, Slots, SlotsByProvider } from "../../core/interface";
import { SlotsService } from "../../core/slots.service";
import { defaultActiveCategory, defaultMaxItems } from "../../core/util";

@Component({
  selector: "app-slots",
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: "./slots.component.html",
  styleUrl: "./slots.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent {
  unsubscribe$: Subject<void> = new Subject();
  isAlive = true;
  slotsData: Slots[];
  slotCategories: Providers[];
  categoryDropDown: boolean = false;
  maxItemsToShow: number = defaultMaxItems;
  activeProvider: string = "";
  public loader: boolean = false;

  constructor(
    private slotService: SlotsService,
    private chd: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.queryParamFunction();
    this.getCategories();
  }

  queryParamsSet(query) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { activeCategory: `${query}` },
      queryParamsHandling: "merge",
    });
  }

  queryParamFunction() {
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const paramValue = params["activeCategory"];
        if (paramValue) {
          this.queryParamsSet(paramValue);
          this.getSlots(paramValue);
          this.activeProvider = paramValue;
        } else {
          this.queryParamsSet(defaultActiveCategory);
          this.getSlots(defaultActiveCategory);
        }
      });
  }

  getSlots(provider) {
    this.loader = false;
    this.slotService
      .getSlotsByProvider(provider)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((slots: SlotsByProvider) => {
        this.queryParamsSet(provider);
        this.slotsData = slots?.games ? slots?.games : null;
        this.loader = true;
        this.chd.markForCheck();
      });
  }

  toggleDrodown() {
    this.categoryDropDown = !this.categoryDropDown;
    if (this.categoryDropDown) {
      this.maxItemsToShow = this.slotCategories?.length;
    } else {
      this.maxItemsToShow = defaultMaxItems;
    }
  }

  getCategories() {
    this.slotService
      .getCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((providers: Providers[]) => {
        this.slotCategories = providers;
        this.chd.markForCheck();
      } , 
      (error) => {
        console.log(error);
        
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
