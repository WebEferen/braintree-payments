import Braintree from '../Braintree';

import IAddOn from '../interfaces/IAddOn';
import IConfig from '../interfaces/IConfig';
import ICustomer from '../interfaces/ICustomer';
import IPaymentMethod from '../interfaces/IPaymentMethod';
import ISubscription from '../interfaces/ISubscription';
import ITransaction from '../interfaces/ITransaction';

export default class Simplifier {

  private braintree: any;

  /**
   * Constructor
   * @param config Braintree config
   */
  constructor(config: IConfig) {
    this.braintree = new Braintree(config);
    this.braintree.connect();
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
   * Generates client token with the customer unique index inside
   * @param customerId Customer unique index
   */
  public async generateClientTokenById(customerId: string) {
    const clientTokenModule = this.braintree.getModule('clientToken');
    const token = await clientTokenModule.generate({customerId});
    return token;
  }

  // /**
  //  * Subscribes specific user to the specific plan with addons
  //  * @param paymentMethodNonce Nonce from the drop-in UI
  //  * @param planId Specific unique plan index
  //  * @param addOns Addons array
  //  */
  // public async subscribe(paymentMethodNonce: string, planId: string, addOns: IAddOn[]) {
  //   const subscriptionModule = this.braintree.getModule('subscription');
  //   const subscribe = await subscriptionModule.create({paymentMethodNonce, planId, addOns});
  //   return subscribe as ISubscription;
  // }

  // /**
  //  * Creates specific transaction base on the nonce provided
  //  * @param paymentMethodNonce Nonce from the drop-in UI
  //  * @param amount Specific amount
  //  * @param customer Customer to create
  //  */
  // public async sale(paymentMethodNonce: string, amount: number, customer: ICustomer) {
  //   const transactionModule = this.braintree.getModule('transaction');
  //   const transaction = await transactionModule.sale({paymentMethodNonce, amount, customer});
  //   return transaction as ITransaction;
  // }

  // /**
  //  * Create payment method based on the customer index provided
  //  * @param paymentMethodNonce Nonce from the drop-in UI
  //  * @param customerId Customer unique index
  //  */
  // public async createPaymentMethod(paymentMethodNonce: string, customerId: string) {
  //   const paymentMethodModule = this.braintree.getModule('paymentMethod');
  //   const paymentMethod = await paymentMethodModule.create({paymentMethodNonce, customerId});
  //   return paymentMethod as IPaymentMethod;
  // }
}
