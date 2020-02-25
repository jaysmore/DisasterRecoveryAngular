import { Component, OnInit } from "@angular/core";
import { JobsModel } from "../shared/jobsModel";
import { JobsService } from "../shared/jobs.service";
import { ActivatedRoute } from "@angular/router";
import { TimecardsComponent } from "../timecards/timecards.component";
@Component({
  selector: "app-edit-job",
  templateUrl: "./edit-job.component.html",
  styleUrls: ["./edit-job.component.css"]
})
export class EditJobComponent implements OnInit {
  submitted = false;
  errorMsg = "";
  id: number;
  public jobs;
  jobModel = new JobsModel(undefined, "", "", null, null);
  constructor(
    private jobService: JobsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.jobModel.Id = this.id;
  }
  onSubmit() {
    console.log(this.jobModel);

    this.submitted = true;
    this.jobService.editJob(this.jobModel, this.id).subscribe();
  }
}
