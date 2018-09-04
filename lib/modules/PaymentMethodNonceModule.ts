import {to} from 'await-to-js';
import Module from '../abstracts/Module';

export default class PaymentMethodNonceModule extends Module {

  /**
   * Constructor
   * @param instance Instance of the paymentMethodNonce
   */
  constructor(instance: any) {
    super(instance);
  }

  /**
   * Creates paymentMethodNonce from the token
   * @param {string} paymentMethodToken Payment method unique token
   */
  public async create(paymentMethodToken: string) {
    [this.error, this.result] = await to(super.getInstance().create(paymentMethodToken));
    if (this.error) { return {success: false, type: this.error.type, error: this.error.message}; }
    return this.result;
  }

}
