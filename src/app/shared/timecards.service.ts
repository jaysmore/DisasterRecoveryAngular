import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ITimecard } from "./timecard";
import { TimecardModel } from "./timecardModel";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class TimecardsService {
  private _url: string = "https://localhost:44366/api/timecards";
  constructor(private http: HttpClient) {}

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
  getTimecards(): Observable<ITimecard[]> {
    return this.http
      .get<ITimecard[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  getTimecardDetail(id: number): Observable<ITimecard> {
    return this.http
      .get<ITimecard>(this._url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }

  addTimecard(timecard: TimecardModel) {
    return this.http
      .post<any>(this._url, timecard)
      .pipe(catchError(this.errorHandler));
  }

  updateTimecard(timecard: TimecardModel, id: number) {
    return this.http
      .put<any>(this._url + "/" + id, timecard)
      .pipe(catchError(this.errorHandler));
  }
  deleteTimecard(id: number) {
    return this.http
      .delete<any>(this._url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }
}
