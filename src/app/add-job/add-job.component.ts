import { Component, OnInit } from "@angular/core";
import { JobsService } from "../jobs/jobs.service";
import { JobsModel } from "../jobs/jobsModel";
// import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
//test
@Component({
  selector: "app-add-job",
  templateUrl: "./add-job.component.html",
  styleUrls: ["./add-job.component.css"]
})
export class AddJobComponent implements OnInit {
  jobModel = new JobsModel(null, "", "", null, null);
  submitted: boolean = false;
  errorMsg = "";
  constructor(private jobsServise: JobsService) {}

  ngOnInit(): void {
    //this.onSubmit();
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.jobModel);
    this.jobsServise.addJob(this.jobModel).subscribe(
      Response => console.log("Successfully added new job.", Response),
      error => (this.errorMsg = error.statusText)
    );
  }
}
