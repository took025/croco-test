import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import {
  ProviderResponse,
  Slots,
  Providers,
  SlotsResponse,
  SlotsByProvider,
} from "./interface";

@Injectable({
  providedIn: "root",
})
export class SlotsService {
  constructor(private http: HttpClient) {}

  getSlotsByProvider(provider:string): Observable<SlotsByProvider> {
    return this.http
      .get<SlotsResponse>(`/v2/slot/providers/${provider}`)
      .pipe(map((items) => items?.data),
      catchError(error => this.handleError(error)));
  }

  getCategories(): Observable<Providers[]> {
    return this.http
      .get<ProviderResponse>("?type=slot&platform=desktop")
      .pipe(map((items) => items?.data),
      catchError(error => this.handleError(error)));
  }

  private handleError(error: Error): Observable<never> {
    console.error('An error occurred:', error);
    alert('Something went wrong')
    return throwError('Something went wrong');
  }
}
