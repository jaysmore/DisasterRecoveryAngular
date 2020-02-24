import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobsComponent } from "./jobs/jobs.component";
import { MachinesComponent } from "./machines/machines.component";
import { TimecardsComponent } from "./timecards/timecards.component";

const routes: Routes = [
  { path: "jobs", component: JobsComponent },
  { path: "machines", component: MachinesComponent },
  { path: "timecards", component: TimecardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
