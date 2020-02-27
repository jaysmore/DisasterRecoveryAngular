import { Component, OnInit } from "@angular/core";
import { JobsService } from "../shared/jobs.service";
import { JobsModel } from "../shared/jobsModel";
import { IJobs } from "../shared/jobs";
// import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-add-job",
  templateUrl: "./add-job.component.html",
  styleUrls: ["./add-job.component.css"]
})
export class AddJobComponent implements OnInit {
  jobModel = new JobsModel(undefined, "", "", null, null);

  submitted: boolean = false;
  errorMsg = "";
  constructor(private jobsServise: JobsService) {}

  ngOnInit(): void {
    //this.onSubmit();
    //s console.log(this.jobModel);
  }
  onSubmit() {
    console.log(this.jobModel);
    this.submitted = true;
    // this.jobModel.Id = 10;
    this.jobsServise.addJob(this.jobModel).subscribe(
      Response => console.log("Successfully added new job.", Response),
      error => (this.errorMsg = error.statusText)
    );
  }
}
