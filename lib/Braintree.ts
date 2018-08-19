// import * as braintree from 'braintree';

export default class Braintree {

  private config: object;

  constructor(config: object) {
      this.config = config;
      return this;
  }

  public getConfig() {
      return this.config as object;
  }
}
