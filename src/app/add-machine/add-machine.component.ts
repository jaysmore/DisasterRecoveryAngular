import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { MachinesService } from "../shared/machines.service";
import { MachinesModel } from "../shared/machinesModel";
//test

@Component({
  selector: "app-add-machine",
  templateUrl: "./add-machine.component.html",
  styleUrls: ["./add-machine.component.css"]
})
export class AddMachineComponent implements OnInit {
  submitted = false;
  errorMsg = "";
  machineModel = new MachinesModel(undefined, null, "", null, null);
  constructor(private machineService: MachinesService) {}

  ngOnInit(): void {}
  success() {
    alert("Successfully added machine!");
  }
  onSubmit() {
    this.submitted = true;
    this.machineService.addMachine(this.machineModel).subscribe(
      Response => console.log("success!", Response),
      error => (this.errorMsg = error.statusText)
    );
  }
}
