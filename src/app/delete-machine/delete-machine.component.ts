import { Component, OnInit } from "@angular/core";
import { MachinesService } from "../shared/machines.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-delete-machine",
  templateUrl: "./delete-machine.component.html",
  styleUrls: ["./delete-machine.component.css"]
})
export class DeleteMachineComponent implements OnInit {
  errorMsg = "";
  id: number;
  public machines;

  constructor(
    private _location: Location,
    private machineService: MachinesService,
    private activatedRoute: ActivatedRoute
  ) {}
  success() {
    alert("Successfully deleted machine!");
  }
  ngOnInit(): void {}
  delete() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.machineService.deleteMachine(this.id).subscribe(
      data => (this.machines = data),
      error => (this.errorMsg = error),
      () => console.log("The sequence completed!")
    );
    this.success();
  }
  backClicked() {
    this._location.back();
  }
}
