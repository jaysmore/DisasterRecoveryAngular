import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobsComponent } from "./jobs/jobs.component";
import { MachinesComponent } from "./machines/machines.component";
import { TimecardsComponent } from "./timecards/timecards.component";
import { AddJobComponent } from "./add-job/add-job.component";
import { EditJobComponent } from "./edit-job/edit-job.component";
import { DeleteJobComponent } from "./delete-job/delete-job.component";
import { AddMachineComponent } from "./add-machine/add-machine.component";
import { EditMachineComponent } from "./edit-machine/edit-machine.component";
import { DeleteMachineComponent } from "./delete-machine/delete-machine.component";
import { SubmitTimecardComponent } from "./submit-timecard/submit-timecard.component";
import { AddTimecardComponent } from "./add-timecard/add-timecard.component";
import { EditTimecardComponent } from "./edit-timecard/edit-timecard.component";
import { DeleteTimecardComponent } from "./delete-timecard/delete-timecard.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "jobs", component: JobsComponent },
  { path: "machines", component: MachinesComponent },
  { path: "timecards", component: TimecardsComponent },
  { path: "addjob", component: AddJobComponent },
  { path: "editjob/:id", component: EditJobComponent },
  { path: "deletejob/:id", component: DeleteJobComponent },
  { path: "addmachine", component: AddMachineComponent },
  { path: "editmachine/:id", component: EditMachineComponent },
  { path: "deletemachine/:id", component: DeleteMachineComponent },
  { path: "timecards", component: TimecardsComponent },
  { path: "submittimecard", component: SubmitTimecardComponent },
  { path: "addtimecard", component: AddTimecardComponent },
  { path: "edittimecard/:id", component: EditTimecardComponent },
  { path: "deletetimecard/:id", component: DeleteTimecardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
