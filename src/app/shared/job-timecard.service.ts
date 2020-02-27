import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IJobTimecard } from "./job-timecard";
import { JobTimecardModel } from "./job-timecardModel";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class JobTimecardService {
  private _url: string = "https://localhost:44366/api/jobs_timecard";
  constructor(private http: HttpClient) {}
  public getJobs(): Observable<IJobTimecard[]> {
    return this.http
      .get<IJobTimecard[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }
  public getDetail(id: number): Observable<IJobTimecard[]> {
    return this.http
      .get<IJobTimecard[]>(this._url + "/" + id)
      .pipe(catchError(this.errorHandler));
  }
  public addJob(job: JobTimecardModel) {
    return this.http
      .post<any>(this._url, job)
      .pipe(catchError(this.errorHandler));
  }
  public editJob(job: JobTimecardModel, id: number) {
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
