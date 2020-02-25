import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IJobs } from "./jobs";
import { JobsModel } from "./jobsModel";
import { FormGroup } from "@angular/forms";
@Injectable({
  providedIn: "root"
})
export class JobsService {
  private _url: string = "https://localhost:44366/api/jobs";
  constructor(private http: HttpClient) {}

  public getJobs(): Observable<IJobs[]> {
    return this.http
      .get<IJobs[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  // addJobs(): Observable<IJobs[]>{
  //   return this.http.post<IJobs[]>(this._url,)
  // }
  public addJob(job: JobsModel) {
    return this.http
      .post<any>(this._url, job)
      .pipe(catchError(this.errorHandler));
  }
  public editJob(job: JobsModel, id: number) {
    return this.http
      .put<any>(this._url + "/" + id, job)
      .pipe(catchError(this.errorHandler));
  }
  public deleteJob(id: number) {
    return this.http
      .delete<any>(this._url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
