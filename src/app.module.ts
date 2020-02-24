import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JobsComponent } from "../src/app/jobs/jobs.component";
import { MachinesComponent } from "../src/app/machines/machines.component";
import { TimecardsComponent } from "../src/app/timecards/timecards.component";
import { HttpClientModule } from "@angular/common/http";
import { AddJobComponent } from "../src/app/add-job/add-job.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    MachinesComponent,
    TimecardsComponent,
    AddJobComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
