import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
<<<<<<< HEAD:src/app-routing.module.ts
import { JobsComponent } from "../src/app/jobs/jobs.component";
import { MachinesComponent } from "../src/app/machines/machines.component";
import { TimecardsComponent } from "../src/app/timecards/timecards.component";
=======
import { JobsComponent } from "./jobs/jobs.component";
import { MachinesComponent } from "./machines/machines.component";
import { TimecardsComponent } from "./timecards/timecards.component";
import { AddJobComponent } from "./add-job/add-job.component";
import { EditJobComponent } from "./edit-job/edit-job.component";
import { DeleteJobComponent } from "./delete-job/delete-job.component";
import { AddMachineComponent } from "./add-machine/add-machine.component";
import { EditMachineComponent } from "./edit-machine/edit-machine.component";
import { DeleteMachineComponent } from "./delete-machine/delete-machine.component";
>>>>>>> b31c949488eb1de1ee61926f09ddea82965b26d4:src/app/app-routing.module.ts

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
  { path: "deletemachine/:id", component: DeleteMachineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
