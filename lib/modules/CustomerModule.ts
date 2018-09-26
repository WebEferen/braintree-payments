import to from 'await-to-js';
import Module from '../abstracts/Module';
import ICustomer from '../interfaces/ICustomer';
import CustomerValidator from '../validators/CustomerValidator';

import ICard from '../interfaces/ICard';

export default class CustomerModule extends Module {

  /**
   * Constructor
   * @param {object} instance Braintree customer instance
   * @param {object} paymentMethodInstance Braintree paymentMethod instance
   */
  constructor(instance: any, paymentMethodInstance: any) {
    super(instance, paymentMethodInstance);
  }

  /**
   * Create customer in the Stripe vault
   * @param {ICustomer} customerDetails New customer details
   */
  public async create(customerDetails: ICustomer) {
    const validator = new CustomerValidator(customerDetails);
    if (validator.isOk()) {
      await super.create(customerDetails);
      /* istanbul ignore if */
      if (super.isError()) { return {success: false, error: super.getError()}; }
      return {success: true, customer: super.getResult('customer') as ICustomer};
    }

    return {success: false, error: validator.getErrors()};
  }

  /**
   * Retrieve customer from the Stripe vault
   * @param {string} customerId Customer unique index
   */
  public async retrieve(customerId: string) {
    await super.retrieve(customerId);
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, customer: super.getResult('customer') as ICustomer};
  }

  /**
   * Update customer in the Stripe vault
   * @param {string} customerId Customer unique index
   * @param {ICustomer} updatedObject Update for the customer
   */
  public async update(customerId: string, updatedObject: ICustomer) {
    await super.update(customerId, updatedObject);
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, customer: super.getResult('customer') as ICustomer};
  }

  /**
   * Deletes (safe) customer from the Stripe vault
   * @param {string} customerId Customer unique index
   */
  public async delete(customerId: string) {
    await super.delete(customerId);
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, customer: {deleted: true}};
  }

  /**
   * Creates a card node for the existing customer
   * @param {string} customerId Customer unique index
   * @param {string} paymentMethodNonce Nonce from the Braintree Drop-in
   */
  public async attachCard(customerId: string, paymentMethodNonce: string) {
    const options = {makeDefault: true, failOnDuplicatePaymentMethod: true, verifyCard: true};
    await super.call(super.instance(true).create({customerId, paymentMethodNonce, options}));
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, card: super.getResult('creditCard') as ICard};
  }

  /**
   * Retrieves card details for the specific customer
   * @param {string} customerId Customer unique index
   * @param {string} cardId Card unique index
   */
  public async retrieveCard(customerId: string, cardId: string) {
    await super.call(super.instance(true).find(cardId));
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, card: super.getResult() as ICard};
  }

  /**
   * Update existing card details
   * @param {string} customerId Customer unique index
   * @param {string} cardId Card unique index
   * @param {ICard} updatedCard Updated card model
   */
  public async updateCard(customerId: string, cardId: string, updatedCard: ICard) {
    await super.call(super.instance(true).update(cardId, updatedCard));
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, card: super.getResult('creditCard') as ICard};
  }

  /**
   * Deletes specific card from specific customer
   * @param {string} customerId Customer unique index
   * @param {string} cardId Card unique index
   */
  public async deleteCard(customerId: string, cardId: string) {
    await super.call(super.instance(true).delete(cardId));
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, card: {deleted: true}};
  }
}
