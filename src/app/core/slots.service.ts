import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import {
  ProviderResponse,
  Slots,
  Providers,
  SlotsResponse,
} from "./interface";

@Injectable({
  providedIn: "root",
})
export class SlotsService {
  constructor(private http: HttpClient) {}

  getSlotsByProvider(provider:string): Observable<Slots[]> {
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

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong');
  }
}
