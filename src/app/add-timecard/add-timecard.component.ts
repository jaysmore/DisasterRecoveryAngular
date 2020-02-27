import { Component, OnInit } from "@angular/core";
import { TimecardsService } from "../shared/timecards.service";
import { TimecardModel } from "../shared/timecardModel";
import { JobsModel } from "../shared/jobsModel";
import { IJobs } from "../shared/jobs";
import { JobsService } from "../shared/jobs.service";
import { MachinesService } from "../shared/machines.service";
import { MachinesModel } from "../shared/machinesModel";
import { JobTimecardModel } from "../shared/job-timecardModel";
import { MachineTimecardModel } from "../shared/machine-timecardModel";
import { JobTimecardService } from "../shared/job-timecard.service";
import { MachineTimecardService } from "../shared/machine-timecard.service";
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
    undefined
  );
  jobtimecardModel = new JobTimecardModel(undefined, undefined, undefined);
  machinetimecardModel = new MachineTimecardModel(
    undefined,
    undefined,
    undefined
  );
  // jobModel = new JobsModel(undefined, "", "", undefined, undefined);
  public jobs = [];
  public machines = [];
  public timecards = [];
  //public jobid;
  constructor(
    private timecardService: TimecardsService,
    private jobService: JobsService,
    private machineService: MachinesService,
    private jobtimecardService: JobTimecardService,
    private machinetimecardService: MachineTimecardService
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
    this.timecardService.getTimecards().subscribe(
      data => (this.timecards = data),
      error => (this.errMsg = error)
    );
    console.log(this.timecards);
  }
  success() {
    alert("successfully submitted timecard!");
  }
  onSubmit() {
    //console.log(this.jobid);
    this.submitted = true;
    var j = 0;
    for (var i = 0; i < this.timecards.length; i++) {
      j = this.timecards[i].id;
    }

    this.jobtimecardModel.TimecardId = j + 1;
    this.machinetimecardModel.TimecardId = j + 1;

    this.timecardService.addTimecard(this.timecardModel).subscribe(
      Response => console.log("success!"),
      error => (this.errorMsg = error.statusText)
    );
    this.jobtimecardService.addJob(this.jobtimecardModel).subscribe(
      Response => console.log("added job-timecard"),
      error => (this.errMsg = error.statusText)
    );
    this.machinetimecardService.addMachine(this.machinetimecardModel).subscribe(
      Response => console.log("added machine-timecard"),
      error => (this.errMsg = error.statusText)
    );

    this.success();
  }
}
