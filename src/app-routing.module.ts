import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { JobsComponent } from "./app/jobs/jobs.component";
import { MachinesComponent } from "./app/machines/machines.component";
import { TimecardsComponent } from "./app/timecards/timecards.component";
import { AddJobComponent } from "./app/add-job/add-job.component";
import { EditJobComponent } from "./app/edit-job/edit-job.component";
import { DeleteJobComponent } from "./app/delete-job/delete-job.component";
import { AddMachineComponent } from "./app/add-machine/add-machine.component";
import { EditMachineComponent } from "./app/edit-machine/edit-machine.component";
import { DeleteMachineComponent } from "./app/delete-machine/delete-machine.component";
import { SubmitTimecardComponent } from './app/submit-timecard/submit-timecard.component';
import { AddTimecardComponent } from './app/add-timecard/add-timecard.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "jobs", component: JobsComponent },
  { path: "machines", component: MachinesComponent },
  { path: "timecards", component: TimecardsComponent },
  { path: "addjob", component: AddJobComponent },
  { path: "editjob/:id", component: EditJobComponent },
  { path: "submittimecard", component: SubmitTimecardComponent },
  { path: "addtimecard", component: AddTimecardComponent },
  { path: "deletejob/:id", component: DeleteJobComponent },
  { path: "addmachine", component: AddMachineComponent },
  { path: "editmachine/:id", component: EditMachineComponent },
  { path: "deletemachine/:id", component: DeleteMachineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
