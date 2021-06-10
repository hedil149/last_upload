export class auth {
  constructor(
    public token: string,
    public refreshToken: string,
    public id: string
  ) {}
}
