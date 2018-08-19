export default class Braintree {

  private config : Object;

  constructor (config : Object) {
    this.config = config;
    return this;
  }

  public getConfig() {
    return <Object>this.config;
  }

}