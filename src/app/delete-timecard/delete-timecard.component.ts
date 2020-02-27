import { Component, OnInit } from "@angular/core";
import { TimecardsService } from "../shared/timecards.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-delete-timecard",
  templateUrl: "./delete-timecard.component.html",
  styleUrls: ["./delete-timecard.component.css"]
})
export class DeleteTimecardComponent implements OnInit {
  errorMsg = "";
  id: number;
  public timecard;
  constructor(
    private timecardService: TimecardsService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {}
  delete() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.timecardService.deleteTimecard(this.id).subscribe(
      data => (this.timecard = data),
      error => (this.errorMsg = error),
      () => console.log("the sequene completed!")
    );
    alert("Successfully deleted!");
  }
  backClicked() {
    this.location.back();
  }
}
