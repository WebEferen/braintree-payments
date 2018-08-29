export default abstract class Module {

  public error: any;
  public result: any;
  private instance: any;

  constructor(instance: any) {
    this.instance = instance;
  }

  protected getInstance() {
    return this.instance;
  }

}
