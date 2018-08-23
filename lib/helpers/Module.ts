export default abstract class Module {

  private instance: any;

  constructor(instance: any) {
    this.instance = instance;
  }

  protected getInstance() {
    return this.instance;
  }

}
