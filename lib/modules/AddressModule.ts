import to from 'await-to-js';
import Module from '../abstracts/Module';
import IAddress from '../interfaces/IAddress';

import AddressValidator from '../validators/AddressValidator';

export default class AddressModule extends Module {

  /**
   * Constructor
   * @param {object} instance Braintree address instance
   */
  constructor(instance: any) {
    super(instance);
  }

  /**
   * Creates new address
   * @param {string} customerId Customer unique index
   * @param {IAddress} newAddress New address object
   */
  public async create(customerId: string, newAddress: IAddress) {
    newAddress.customerId = customerId;
    const validator = new AddressValidator(newAddress);
    if (validator.verify()) {
      [this.error, this.result] = await to(super.getInstance().create(newAddress));
      /* istanbul ignore if */
      if (this.error) { return {success: false, type: this.error.type, error: this.error.message}; }
      return this.result as IAddress;
    }
    return {success: false, error: 'ValidationError'};
  }

  /**
   * Gets specific address by the id
   * @param {string} customerId Customer unique index
   * @param {string} addressId Address unique index
   */
  public async find(customerId: string, addressId: string) {
    [this.error, this.result] = await to(super.getInstance().find(customerId, addressId));
    if (this.error) { return {success: false, type: this.error.type, error: this.error.message}; }
    return {success: true, address: this.result as IAddress};
  }

  /**
   * Updates specific address
   * @param {string} customerId Customer unique index
   * @param {string} addressId Address unique index
   * @param {IAddress} updatedAddress IAddress update object
   */
  public async update(customerId: string, addressId: string, updatedAddress: IAddress) {
    [this.error, this.result] = await to(super.getInstance().update(customerId, addressId, updatedAddress));
    if (this.error) { return {success: false, type: this.error.type, error: this.error.message}; }
    return {success: true, address: this.result as IAddress};
  }

  /**
   * Deletes specific address pinned to speciifc customer
   * @param {string} customerId Customer unique index
   * @param {string} addressId Address unique index
   */
  public async delete(customerId: string, addressId: string) {
    [this.error, this.result] = await to(super.getInstance().delete(customerId, addressId));
    if (this.error) { return {success: false, type: this.error.type, error: this.error.message}; }
    return {success: true};
  }

}
