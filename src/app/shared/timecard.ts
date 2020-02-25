import { JobsModel } from "./jobsModel";
import { MachinesModel } from "./machinesModel";
export interface ITimecard {
  id: number;
  name: string;
  datecreated: Date;
  isconfirmed: boolean;
  sitecode: string;
  totaljobhours: number;
  totalmachinehours: number;
  totaljobamount: number;
  totalmachineamount: number;
  jobModel: JobsModel;
  machineModel: MachinesModel;
}
