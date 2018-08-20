import * as braintree from 'braintree';

import IConfig from './interfaces/IConfig';

import { Customer } from './modules/Customer';
import { Plan } from './modules/Plan';
import { Subscription } from './modules/Subscription';
import { Transaction } from './modules/Transaction';

export default class Braintree {

  private config: IConfig;
  private gateway: any;

  constructor(config: IConfig) {
      this.config = config;
      return this;
  }

  public getConfig(key: string | null = null) {
    switch ((key) ? key : null) {
        case 'environment':
            return this.config.environment;
        case 'merchantId':
            return this.config.merchantId;
        case 'publicKey':
            return this.config.publicKey;
        case 'privateKey':
            return this.config.privateKey;
        default:
            return this.config as IConfig;
    }
  }

  public connect() {
    this.gateway = braintree.connect(this.config);
  }

  public getGateway() {
    return this.gateway;
  }

  public getModule(moduleName: string) {
      moduleName = moduleName.toLowerCase();
      switch (moduleName) {
        case 'customer':
            return new Customer(this.gateway);
        case 'subscription':
            return new Subscription(this.gateway);
        case 'plan':
            return new Plan(this.gateway);
        case 'transaction':
            return new Transaction(this.gateway);
        default:
            throw new Error('There is no module with that name!');
      }
  }
}
