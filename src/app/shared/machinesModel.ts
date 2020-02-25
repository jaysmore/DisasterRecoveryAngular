export class MachinesModel {
  constructor(
    public Id: number,
    public MachineCode: string,
    public Description: string,
    public HrRent: number,
    public MaxHrPerDay: number
  ) {}
}
