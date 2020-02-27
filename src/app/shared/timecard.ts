import { JobsModel } from "./jobsModel";
import { MachinesModel } from "./machinesModel";
export interface ITimecard {
  id: number;
  name: string;
  datecreated: Date;
  isConfirmed: boolean;
  sitecode: string;
  totaljobhours: number;
  totalmachinehours: number;
  totaljobamount: number;
  totalmachineamount: number;
  jobModel: JobsModel;
  machineModel: MachinesModel;
}
