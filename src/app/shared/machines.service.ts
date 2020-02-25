import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IMachines } from "./machines";

import { MachinesModel } from "./machinesModel";
import { FormGroup } from "@angular/forms";
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
  public addMachine(machine: MachinesModel) {
    return this.http
      .post<any>(this._url, machine)
      .pipe(catchError(this.errorHandler));
  }
  public editMachine(machine: MachinesModel, id: number) {
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
