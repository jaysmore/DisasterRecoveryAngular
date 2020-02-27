import { Component, OnInit } from "@angular/core";
import { TimecardModel } from "../shared/timecardModel";
import { ActivatedRoute } from "@angular/router";
import { TimecardsService } from "../shared/timecards.service";

import { JobsService } from "../shared/jobs.service";
import { MachinesService } from "../shared/machines.service";
@Component({
  selector: "app-edit-timecard",
  templateUrl: "./edit-timecard.component.html",
  styleUrls: ["./edit-timecard.component.css"]
})
export class EditTimecardComponent implements OnInit {
  submitted = false;
  errorMsg = "";
  id: number;
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
  public jobs = [];
  public machines = [];
  constructor(
    private timecardService: TimecardsService,
    private activatedRoute: ActivatedRoute,

    private jobService: JobsService,
    private machineService: MachinesService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.timecardModel.Id = this.id;
    this.jobService.getJobs().subscribe(
      data => (this.jobs = data),
      error => (this.errorMsg = error),
      () => console.log("the sequence completed!")
    );
    this.machineService.getMachines().subscribe(
      data => (this.machines = data),
      error => (this.errorMsg = error),
      () => console.log("the sequence completed!")
    );
  }
  onSubmit() {
    console.log(this.timecardModel);

    this.submitted = true;
    this.timecardService
      .updateTimecard(this.timecardModel, this.id)
      .subscribe();
  }
}
