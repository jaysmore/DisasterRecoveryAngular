import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
import { JobsService } from "../jobs/jobs.service";
import { JobsModel } from "../jobs/jobsModel";
// import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
//test
=======
import { JobsService } from "../shared/jobs.service";
import { JobsModel } from "../shared/jobsModel";
import { IJobs } from "../shared/jobs";
// import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { Observable } from "rxjs";

>>>>>>> b31c949488eb1de1ee61926f09ddea82965b26d4
@Component({
  selector: "app-add-job",
  templateUrl: "./add-job.component.html",
  styleUrls: ["./add-job.component.css"]
})
export class AddJobComponent implements OnInit {
<<<<<<< HEAD
  jobModel = new JobsModel(null, "", "", null, null);
=======
  //timecard = { Id: null, Name: null, DateCreated: null, isConfirmed: null };
  jobModel = new JobsModel(undefined, "", "", null, null);
  //jobs: Observable<IJobs>;

>>>>>>> b31c949488eb1de1ee61926f09ddea82965b26d4
  submitted: boolean = false;
  errorMsg = "";
  constructor(private jobsServise: JobsService) {}

  ngOnInit(): void {
    //this.onSubmit();
<<<<<<< HEAD
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.jobModel);
=======
    //s console.log(this.jobModel);
  }
  onSubmit() {
    console.log(this.jobModel);
    this.submitted = true;
    // this.jobModel.Id = 10;
>>>>>>> b31c949488eb1de1ee61926f09ddea82965b26d4
    this.jobsServise.addJob(this.jobModel).subscribe(
      Response => console.log("Successfully added new job.", Response),
      error => (this.errorMsg = error.statusText)
    );
  }
}
