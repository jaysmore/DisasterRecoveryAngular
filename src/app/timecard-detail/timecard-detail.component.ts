import { Component, OnInit } from "@angular/core";
import { TimecardsService } from "../shared/timecards.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MachineTimecardModel } from "../shared/machine-timecardModel";
import { JobTimecardModel } from "../shared/job-timecardModel";
import { JobTimecardService } from "../shared/job-timecard.service";
import { MachineTimecardService } from "../shared/machine-timecard.service";
import { TimecardModel } from "../shared/timecardModel";
import { JobsModel } from "../shared/jobsModel";
import { MachinesModel } from "../shared/machinesModel";
import { JobsService } from "../shared/jobs.service";
import { MachinesService } from "../shared/machines.service";
import { IJobTimecard } from "../shared/job-timecard";
import { Observable } from "rxjs";
@Component({
  selector: "app-timecard-detail",
  templateUrl: "./timecard-detail.component.html",
  styleUrls: ["./timecard-detail.component.css"]
})
export class TimecardDetailComponent implements OnInit {
  public timecard;
  public errMsg;
  public id: number;

  public jobs = [];
  public machines = [];
  public tempjobs = [];
  public jobid1;
  public machineid1;

  public jobarr;
  public machinearr;

  jobtimecardModel = new JobTimecardModel(undefined, undefined, undefined);
  machinetimecardModel = new MachineTimecardModel(
    undefined,
    undefined,
    undefined
  );

  constructor(
    private timecardService: TimecardsService,
    private jobtimecardService: JobTimecardService,
    private machinetimecardService: MachineTimecardService,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private jobService: JobsService,
    private machineService: MachinesService
  ) {}

  ngOnInit(): void {
    //get all the jt and mt
    this.jobtimecardService.getJobs().subscribe(
      data => (this.jobs = data),
      error => (this.errMsg = error),
      () => console.log("the sequence completed!")
    );

    this.machinetimecardService.getMachines().subscribe(
      data => (this.machines = data),
      error => (this.errMsg = error),
      () => console.log("the sequence completed!")
    );

    this.id = this.activatedRoute.snapshot.params["id"];
    //filter

    this.timecardService.getTimecardDetail(this.id).subscribe(
      data => (this.timecard = data),
      error => (this.errMsg = error),
      () => console.log("the sequence completed!")
    );
  }
  backClicked() {
    this._location.back();
  }
}
