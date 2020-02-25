import { Component, OnInit } from "@angular/core";
import { JobsService } from "../shared/jobs.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-delete-job",
  templateUrl: "./delete-job.component.html",
  styleUrls: ["./delete-job.component.css"]
})
export class DeleteJobComponent implements OnInit {
  errorMsg = "";
  id: number;
  public jobs;
  constructor(
    private jobService: JobsService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {}
  delete() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.jobService.deleteJob(this.id).subscribe(
      data => (this.jobs = data),
      error => (this.errorMsg = error),
      () => console.log("the sequene completed!")
    );
    alert("Successfully deleted!");
  }
  backClicked() {
    this.location.back();
  }
}
