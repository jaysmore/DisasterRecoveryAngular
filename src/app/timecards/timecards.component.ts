import { Component, OnInit } from "@angular/core";
import { TimecardsService } from "../shared/timecards.service";
@Component({
  selector: "app-timecards",
  templateUrl: "./timecards.component.html",
  styleUrls: ["./timecards.component.css"]
})
export class TimecardsComponent implements OnInit {
  public timecards = [];
  public errorMsg;
  constructor(private timecardService: TimecardsService) {}

  ngOnInit(): void {
    this.timecardService.getTimecards().subscribe(
      data => (this.timecards = data),
      error => (this.errorMsg = error),
      () => console.log("The sequence completed!")
    );
  }
}
