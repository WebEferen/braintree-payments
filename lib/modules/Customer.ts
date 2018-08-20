import Validator from '../helpers/Validator';
import ICustomer from '../interfaces/ICustomer';

export class Customer {

  private customer: any;

  constructor(customer: any) {
    this.customer = customer;
  }

  /**
   * Creates new customer inside braintree database
   * @param {ICustomer} customer Customer object
   */
  public async create(newCustomer: ICustomer) {
    const validator = new Validator(newCustomer, ['id', 'firstName', 'lastName']);
    if (validator.verify()) {
      try {
        const customer = await this.customer.create(newCustomer);
        return customer as ICustomer;
      } catch (error) { return {success: false}; }
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
    } catch (error) { return {success: false}; }
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
    } catch (error) { return {success: false}; }
  }

  /**
   * Deletes specific customer from braintree database
   * @param {String} customerId Customer unique index
   */
  public async delete(customerId: string) {
    try {
      await this.customer.delete(customerId);
      return {success: true};
    } catch (error) { return {success: false}; }
  }
}
