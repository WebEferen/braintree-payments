import Braintree from '../Braintree';

import IAddOn from '../interfaces/IAddOn';
import IConfig from '../interfaces/IConfig';
import ICustomer from '../interfaces/ICustomer';

export default class Checkout {

  private braintree: any;

  constructor(config: IConfig) {
    this.braintree = new Braintree(config);
  }

  public async generateToken() {
    const clientTokenModule = this.braintree.getModule('clientToken');
    const token = await clientTokenModule.generate();
    return token;
  }

  public async subscribe(paymentMethodNonce: string, planId: string, addOns: IAddOn[]) {
    const subscriptionModule = this.braintree.getModule('subscription');
    const subscribe = await subscriptionModule.create({paymentMethodNonce, planId, addOns});
    return subscribe;
  }

  public async sale(paymentMethodNonce: string, amount: number, customer: ICustomer) {
    const transactionModule = this.braintree.getModule('transaction');
    const transaction = await transactionModule.sale({paymentMethodNonce, amount, customer});
    return transaction;
  }

}
