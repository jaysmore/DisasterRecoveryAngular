import { Component, OnInit } from "@angular/core";
import { JobsService } from "../shared/jobs.service";
@Component({
  selector: "app-jobs",
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.css"]
})
export class JobsComponent implements OnInit {
  public jobs = [];
  public errMsg;

  constructor(private jobService: JobsService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      data => (this.jobs = data),
      error => (this.errMsg = error),
      () => console.log("the sequence completed!")
    );
  }
}
