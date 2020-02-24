export class JobsModel {
  constructor(
    public id: number,
    public jobcode: string,
    public description: string,
    public hrRate: number,
    public maxHrPerDay: number
  ) {}
}
