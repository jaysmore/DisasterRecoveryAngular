import { Component, OnInit } from "@angular/core";
import { TimecardsService } from "../shared/timecards.service";
import { TimecardModel } from "../shared/timecardModel";
import { JobsModel } from "../shared/jobsModel";
import { IJobs } from "../shared/jobs";
import { JobsService } from "../shared/jobs.service";
import { MachinesService } from "../shared/machines.service";
import { MachinesModel } from "../shared/machinesModel";
@Component({
  selector: "app-add-timecard",
  templateUrl: "./add-timecard.component.html",
  styleUrls: ["./add-timecard.component.css"]
})
export class AddTimecardComponent implements OnInit {
  submitted = false;
  errorMsg = "";
  public errMsg;
  timecardModel = new TimecardModel(
    undefined,
    "",
    undefined,
    undefined,
    "",
    undefined,
    undefined,
    undefined,
    undefined,
    new JobsModel(undefined, "", "", undefined, undefined),
    new MachinesModel(undefined, "", "", undefined, undefined)
  );
  // jobModel = new JobsModel(undefined, "", "", undefined, undefined);
  public jobs = [];
  public machines = [];
  public jobid;
  constructor(
    private timecardService: TimecardsService,
    private jobService: JobsService,
    private machineService: MachinesService
  ) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(
      data => (this.jobs = data),
      error => (this.errMsg = error),
      () => console.log("the sequence completed!")
    );
    this.machineService.getMachines().subscribe(
      data => (this.machines = data),
      error => (this.errMsg = error),
      () => console.log("the sequence completed!")
    );
  }
  success() {
    alert("successfully submitted timecard!");
  }
  onSubmit() {
    console.log(this.jobid);
    this.submitted = true;
    this.timecardService.addTimecard(this.timecardModel).subscribe(
      Response => console.log("success!"),
      error => (this.errorMsg = error.statusText)
    );

    this.success();
  }
}
