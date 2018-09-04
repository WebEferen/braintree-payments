import {to} from 'await-to-js';
import Module from '../abstracts/Module';
import IPaymentMethod from '../interfaces/IPaymentMethod';
import PaymentMethodValidator from '../validators/PaymentMethodValidator';

export default class PaymentMethodModule extends Module {

  /**
   * Constructor
   * @param {object} instance Instance of the PaymentMethod
   */
  constructor(instance: any) {
    super(instance);
  }

  /**
   * Creates paymentMethod object inside braintree database
   * @param {IPaymentMethod} paymentMethod PaymentMethod object
   */
  /* istanbul ignore next */
  public async create(paymentMethod: IPaymentMethod) {
    const validator = new PaymentMethodValidator(paymentMethod);
    if (validator.verify()) {
      [this.error, this.result] = await to(super.getInstance().create(paymentMethod));
      if (!this.error) { return this.result as IPaymentMethod; }
      return {success: false, type: this.error.type, message: this.error.message};
    }
    return {success: false, error: 'VerificationError'};
  }

  /**
   * Finds paymentMethod by the given token
   * @param {string} token Unique token from braintree
   */
  public async find(token: string) {
    [this.error, this.result] = await to(super.getInstance().find(token));
    if (this.error) { return {success: false, type: this.error.type, message: this.error.message}; }
    return {success: true, paymentMethod: this.result as IPaymentMethod};
  }

  /**
   * Updates paymentMethod from the braintree
   * @param {string} token Unique token from braintree
   * @param {IPaymentMethod} updatedPaymentMethod Updated paymentMethod object
   */
  /* istanbul ignore next */
  public async update(token: string, updatedPaymentMethod: IPaymentMethod) {
    [this.error, this.result] = await to(super.getInstance().update(token, updatedPaymentMethod));
    if (this.error) { return {success: false, type: this.error.type, message: this.error.message}; }
    return {success: true, paymentMethod: this.result};
  }

  /**
   * Deletes paymentMethod from the braintree
   * @param {string} token Unique token from braintree
   */
  /* istanbul ignore next */
  public async delete(token: string) {
    [this.error, this.result] = await to(super.getInstance().delete(token));
    if (!this.error) { return {success: true}; }
    return {success: false, type: this.error.type, message: this.error.message};
  }

}
