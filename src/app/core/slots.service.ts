import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { gamesInterface, slotCategoriesInterface, slotsInterface } from "./interface";

@Injectable({
  providedIn: "root",
})
export class SlotsService {
  constructor(private http: HttpClient) {}
  getSlots(): Observable<slotsInterface[]> {
    return this.http.get<slotsInterface[]>(
      "/v2/slot/categories?include=games"
    );
  }

  getSlotsByProvider(provider): Observable<slotsInterface[]> {
    return this.http.get<slotsInterface[]>(
      `/v2/slot/providers/${provider}`
    );
  }


  getCategories(): Observable<gamesInterface[]> {
    return this.http.get<gamesInterface[]>(
      "?type=slot&platform=desktop"
    );
  }
}
