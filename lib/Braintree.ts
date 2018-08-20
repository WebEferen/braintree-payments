import * as braintree from 'braintree';

import { Customer } from './modules/Customer';
import { Plan } from './modules/Plan';
import { Subscription } from './modules/Subscription';
import { Transaction } from './modules/Transaction';

import IConfig from './interfaces/IConfig';

export default class Braintree {

  private config: IConfig;
  private gateway: any;

  /**
   * Braintree Module constructor
   * @param config Config for the braintree
   */
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
    if (!this.config) { return false; }
    this.gateway = braintree.connect(this.config);
    if (!this.gateway) { return false; }
    return true;
  }

  public getGateway() {
    return this.gateway;
  }

  public getModule(moduleName: string) {
      moduleName = moduleName.toLowerCase();
      switch (moduleName) {
        case 'customer':
            return new Customer(this.getGateway().customer);
        case 'subscription':
            return new Subscription(this.getGateway().subscription);
        case 'plan':
            return new Plan(this.getGateway().plan);
        case 'transaction':
            return new Transaction(this.getGateway().transaction);
        default:
            throw new Error('There is no module with that name!');
      }
  }
}
