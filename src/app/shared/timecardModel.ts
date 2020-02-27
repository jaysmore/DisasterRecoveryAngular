import { JobsModel } from "./jobsModel";
import { MachinesModel } from "./machinesModel";
export class TimecardModel {
  constructor(
    public Id: number,
    public Name: string,
    public DateCreated: Date,
    public isConfirmed: boolean,
    public SiteCode: string,
    public TotalJobHours: number,
    public TotalMachineHours: number,
    public TotalJobAmount: number,
    public TotalMachineAmount: number
  ) {}
}
