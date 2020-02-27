import { Injectable } from "@angular/core";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IMachineTimecard } from "./machine-timecard";
import { MachineTimecardModel } from "./machine-timecardModel";
@Injectable({
  providedIn: "root"
})
export class MachineTimecardService {
  private _url: string = "https://localhost:44366/api/machines_timecard";
  constructor(private http: HttpClient) {}
  getMachines(): Observable<IMachineTimecard[]> {
    return this.http
      .get<IMachineTimecard[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  public getDetail(id: number): Observable<IMachineTimecard[]> {
    return this.http
      .get<IMachineTimecard[]>(this._url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }
  public addMachine(machine: MachineTimecardModel) {
    return this.http
      .post<any>(this._url, machine)
      .pipe(catchError(this.errorHandler));
  }
  public editMachine(machine: MachineTimecardModel, id: number) {
    return this.http
      .put<any>(this._url + "/" + id, machine)
      .pipe(catchError(this.errorHandler));
  }
  public deleteMachine(id: number) {
    return this.http
      .delete<any>(this._url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
