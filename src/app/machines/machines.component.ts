import { Component, OnInit } from "@angular/core";
import { MachinesService } from "../machines/machines.service";

@Component({
  selector: "app-machines",
  templateUrl: "./machines.component.html",
  styleUrls: ["./machines.component.css"]
})
export class MachinesComponent implements OnInit {
  public machines = [];
  public errMsg;
  constructor(private machineService: MachinesService) {}

  ngOnInit(): void {
    this.machineService.getMachines().subscribe(
      data => (this.machines = data),
      error => (this.errMsg = error),
      () => console.log("the sequence completed!")
    );
  }
}
