import {to} from 'await-to-js';
import Module from '../abstracts/Module';
import ISubscription from '../interfaces/ISubscription';
import SubscriptionValidator from '../validators/SubscriptionValidator';

export default class SubscriptionModule extends Module {

  /**
   * Constructor
   * @param {object} instance Braintree subscription instance
   */
  constructor(instance: any) {
    super(instance);
  }

  /**
   * Creates a subscription for the braintree
   * @param {ISubscription} newSubscription Subscription object
   */
  public async create(newSubscription: ISubscription) {
    const validator = new SubscriptionValidator(newSubscription);
    if (validator.verify()) {
      [this.error, this.result] = await to(super.getInstance().create(newSubscription));
      /* istanbul ignore if */
      if (this.error) { return {success: false, error: this.error.type}; }
      return this.result as ISubscription;
    }
    return {success: false, error: 'VerificationError'};
  }

  /**
   * Finds specific subscription from the braintree database
   * @param {string} subscriptionId Subscription unique index
   */
  public async find(subscriptionId: string) {
    [this.error, this.result] = await to(super.getInstance().find(subscriptionId));
    if (this.error) { return {success: false, error: this.error.type}; }
    return {success: true, subscription: this.result as ISubscription};
  }

  /**
   * Updates specific subscription
   * @param {string} subscriptionId Subscription unique index
   * @param {ISubscription} updatedSubscription Updated subscription details like price | planId
   */
  public async update(subscriptionId: string, updatedSubscription: ISubscription) {
    [this.error, this.result] = await to(super.getInstance().update(subscriptionId, updatedSubscription));
    if (this.error) { return {success: false, error: this.error.type}; }
    return {success: true, subscription: this.result as ISubscription};
  }

  /**
   * Cancels specific subscription
   * @param {string} subscriptionId Subscription unique index
   */
  public async cancel(subscriptionId: string) {
    [this.error, this.result] = await to(super.getInstance().cancel(subscriptionId));
    if (this.error) { return {success: false, error: this.error.type}; }
    return {success: true};
  }

}
