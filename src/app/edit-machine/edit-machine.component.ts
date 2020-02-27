import { Component, OnInit } from "@angular/core";
import { MachinesModel } from "../shared/machinesModel";
import { ActivatedRoute } from "@angular/router";
import { MachinesService } from "../shared/machines.service";

@Component({
  selector: "app-edit-machine",
  templateUrl: "./edit-machine.component.html",
  styleUrls: ["./edit-machine.component.css"]
})
export class EditMachineComponent implements OnInit {
  submitted = false;
  errorMsg = "";
  id: number;
  public machines;
  machineModel = new MachinesModel(undefined, "", "", null, null);

  constructor(
    private machineService: MachinesService,
    private activatedRoute: ActivatedRoute
  ) {}
  success() {
    alert("Successfully edited machine!");
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.machineModel.Id = this.id;
  }
  onSubmit() {
    this.submitted = true;
    this.machineService.editMachine(this.machineModel, this.id).subscribe();
    this.success();
  }
}
