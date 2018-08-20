import to from 'await-to-js';
import ICustomer from '../interfaces/ICustomer';
import CustomerValidator from '../validators/CustomerValidator';

export default class CustomerModule {

  private customer: any;

  constructor(customer: any) {
    this.customer = customer;
  }

  /**
   * Creates new customer inside braintree database
   * @param {ICustomer} customer Customer object
   */
  public async create(newCustomer: ICustomer) {
    let err;
    let customer;
    const validator = new CustomerValidator(newCustomer);
    if (validator.verify()) {
      [err, customer] = await to(this.customer.create(newCustomer));
      return customer as ICustomer;
    }
    return {success: false};
  }

  /**
   * Finds specific customer inside braintree database
   * @param {ICustomer} customerId Customer unique index
   */
  public async find(customerId: string) {
    try {
      const customer = await this.customer.find(customerId);
      return {customer: customer as ICustomer, success: true};
    } catch (e) { return {success: false, error: e}; }
  }

  /**
   * Updates specific customer inside braintree database
   * @param {String} customerId Customer unique index
   * @param {ICustomer} updatedCustomer Customer object
   */
  public async update(customerId: string, updatedCustomer: ICustomer) {
    try {
      const customer = await this.customer.update(customerId, updatedCustomer);
      return {customer: customer as ICustomer, success: true};
    } catch (e) { return {success: false, error: e}; }
  }

  /**
   * Deletes specific customer from braintree database
   * @param {String} customerId Customer unique index
   */
  public async delete(customerId: string) {
    try {
      await this.customer.delete(customerId);
      return {success: true};
    } catch (e) { return {success: false, error: e}; }
  }
}
