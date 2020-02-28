import { Component, OnInit } from "@angular/core";
import { TimecardsService } from "../shared/timecards.service";

@Component({
  selector: "app-submit-timecard",
  templateUrl: "./submit-timecard.component.html",
  styleUrls: ["./submit-timecard.component.css"]
})
export class SubmitTimecardComponent implements OnInit {
  public timecards = [];
  public errorMsg;
  constructor(public timecardService: TimecardsService) {}

  ngOnInit(): void {
    this.timecardService.getTimecards().subscribe(
      data => {
        this.timecards = data;
        console.log(this.timecards);
      },
      error => (this.errorMsg = error),
      () => console.log("The sequence completed!")
    );
  }
}
