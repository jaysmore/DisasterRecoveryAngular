export class JobsModel {
  constructor(
    public Id: number,
    public JobCode: string,
    public Description: string,
    public HrRate: number,
    public MaxHrPerDay: number
  ) {}
}
