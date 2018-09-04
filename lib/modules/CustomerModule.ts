import to from 'await-to-js';
import Module from '../abstracts/Module';
import ICustomer from '../interfaces/ICustomer';
import CustomerValidator from '../validators/CustomerValidator';

export default class CustomerModule extends Module {

  /**
   * Constructor
   * @param {object} instance Braintree customer instance
   */
  constructor(instance: any) {
    super(instance);
  }

  /**
   * Creates new customer inside braintree database
   * @param {ICustomer} customer Customer object
   */
  public async create(newCustomer: ICustomer) {
    const validator = new CustomerValidator(newCustomer);
    if (validator.verify()) {
      [this.error, this.result] = await to(super.getInstance().create(newCustomer));
      /* istanbul ignore if */
      if (this.error) { return {success: false, type: this.error.type, message: this.error.message}; }
      return this.result as ICustomer;
    }
    return {success: false, error: 'ValidationError'};
  }

  /**
   * Finds specific customer inside braintree database
   * @param {string} customerId Customer unique index
   */
  public async find(customerId: string) {
    [this.error, this.result] = await to(super.getInstance().find(customerId));
    if (!this.error) { return {success: true, customer: this.result as ICustomer}; }
    return {success: false, type: this.error.type, message: this.error.message};
  }

  /**
   * Updates specific customer inside braintree database
   * @param {string} customerId Customer unique index
   * @param {ICustomer} updatedCustomer Customer object
   */
  public async update(customerId: string, updatedCustomer: ICustomer) {
    [this.error, this.result] = await to(super.getInstance().update(customerId, updatedCustomer));
    if (!this.error) { return {success: true, customer: this.result as ICustomer}; }
    return {success: false, type: this.error.type, message: this.error.message};
  }

  /**
   * Deletes specific customer from braintree database
   * @param {string} customerId Customer unique index
   */
  public async delete(customerId: string) {
    [this.error, this.result] = await to(super.getInstance().delete(customerId));
    if (!this.error) { return {success: true}; }
    return {success: false, type: this.error.type, message: this.error.message};
  }
}
