import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "../app-routing.module";
import { AppComponent } from "./app.component";
import { JobsComponent } from "./jobs/jobs.component";
import { MachinesComponent } from "./machines/machines.component";
import { TimecardsComponent } from "./timecards/timecards.component";
import { HttpClientModule } from "@angular/common/http";
import { AddJobComponent } from "./add-job/add-job.component";
import { FormsModule } from "@angular/forms";
import { EditJobComponent } from './edit-job/edit-job.component';
import { DeleteJobComponent } from './delete-job/delete-job.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { EditMachineComponent } from './edit-machine/edit-machine.component';
import { DeleteMachineComponent } from './delete-machine/delete-machine.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    MachinesComponent,
    TimecardsComponent,
    AddJobComponent,
    EditJobComponent,
    DeleteJobComponent,
    AddMachineComponent,
    EditMachineComponent,
    DeleteMachineComponent,
    AuthComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
