import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { SlotsService } from "../../../core/slots.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import {
  gamesInterface,
  slotCategoriesInterface,
} from "../../../core/interface";
import { takeWhile } from "rxjs";

@Component({
  selector: "app-slots",
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: "./slots.component.html",
  styleUrl: "./slots.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlotsComponent {
  isAlive = true;
  slotsData: gamesInterface[] = [];
  slotCategories: slotCategoriesInterface[] = [];
  categoryDropDown: boolean = false;
  maxItemsToShow: number = 12;
  constructor(private slotService: SlotsService,
    private chd : ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getData();
    this.getCategories();
  }

  filterSlots(slot) {
    this.slotService.getSlotsByProvider(slot.provider)
    .pipe(takeWhile(() => this.isAlive))
    .subscribe((res) => {
      this.slotsData = res["data"].games;
      this.chd.markForCheck();
    });
  }

  toggleDrodown() {
    this.categoryDropDown = !this.categoryDropDown;
    if (this.categoryDropDown) {
      this.maxItemsToShow = this.slotCategories.length;
    } else {
      this.maxItemsToShow = 12;
    }
  }

  getCategories() {
    this.slotService.getCategories()
    .pipe(takeWhile(() => this.isAlive))
    .subscribe((res) => {
      this.slotCategories = res["data"];
      this.chd.markForCheck();
    });
  }

  getData() {
    this.slotService
      .getSlots()
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((res) => {
        this.slotsData = res["data"][0].games;
        this.chd.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
