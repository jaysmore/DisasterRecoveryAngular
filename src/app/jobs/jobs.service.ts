import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IJobs } from "./jobs";
import { JobsModel } from "./jobsModel";
@Injectable({
  providedIn: "root"
})
export class JobsService {
  private _url: string = "https://localhost:44366/api/jobs";
  constructor(private http: HttpClient) {}

  getJobs(): Observable<IJobs[]> {
    return this.http
      .get<IJobs[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  // addJobs(): Observable<IJobs[]>{
  //   return this.http.post<IJobs[]>(this._url,)
  // }
  addJob(job: JobsModel) {
    return this.http
      .post<any>(this._url, job)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
