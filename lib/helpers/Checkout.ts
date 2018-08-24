import Braintree from '../Braintree';

import IAddOn from '../interfaces/IAddOn';
import IConfig from '../interfaces/IConfig';
import ICustomer from '../interfaces/ICustomer';

export default class Checkout {

  private braintree: any;

  /**
   * Constructor
   * @param config Braintree config
   */
  constructor(config: IConfig) {
    this.braintree = new Braintree(config);
  }

  /**
   * Generates client token for the drop-in authorization
   */
  public async generateClientToken() {
    const clientTokenModule = this.braintree.getModule('clientToken');
    const token = await clientTokenModule.generate();
    return token;
  }

  /**
   * Subscribes specific user to the specific plan with addons
   * @param paymentMethodNonce Nonce from the drop-in UI
   * @param planId Specific unique plan index
   * @param addOns Addons array
   */
  public async subscribe(paymentMethodNonce: string, planId: string, addOns: IAddOn[]) {
    const subscriptionModule = this.braintree.getModule('subscription');
    const subscribe = await subscriptionModule.create({paymentMethodNonce, planId, addOns});
    return subscribe;
  }

  /**
   * Creates specific transaction base on the nonce provided
   * @param paymentMethodNonce Nonce from the drop-in UI
   * @param amount Specific amount
   * @param customer Customer to create
   */
  public async sale(paymentMethodNonce: string, amount: number, customer: ICustomer) {
    const transactionModule = this.braintree.getModule('transaction');
    const transaction = await transactionModule.sale({paymentMethodNonce, amount, customer});
    return transaction;
  }

}
