import * as braintree from 'braintree';
import IConfig from './interfaces/IConfig';

export default class Braintree {

  private config: IConfig;
  private gateway: any;

  constructor(config: IConfig) {
      this.config = config;
      return this;
  }

  public getConfig() {
      return this.config as IConfig;
  }

  public connect() {
    this.gateway = braintree.connect(this.config);
  }

  public getGateway() {
      return this.gateway;
  }
}
