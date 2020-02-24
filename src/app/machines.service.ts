import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IMachines } from "./machines";
@Injectable({
  providedIn: "root"
})
export class MachinesService {
  private _url: string = "https://localhost:44366/api/machines";
  constructor(private http: HttpClient) {}
  getMachines(): Observable<IMachines[]> {
    return this.http
      .get<IMachines[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
