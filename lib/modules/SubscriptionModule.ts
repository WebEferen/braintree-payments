import Module from '../abstracts/Module';
import SubscriptionValidator from '../validators/SubscriptionValidator';

import ISubscription from '../interfaces/ISubscription';

export default class SubscriptionModule extends Module {

  /**
   * Constructor
   * @param {object} instance Braintree subscription instance
   */
  constructor(instance: any) { super(instance); }

  /**
   * Creates new subscription
   * @param {ISubscription} subscription New subscription object
   */
  public async create(subscription: ISubscription) {
    const validator = new SubscriptionValidator(subscription);
    if (validator.isOk()) {
      await super.create(subscription);
      /* istanbul ignore next */
      if (super.isError()) { return {success: false, error: super.getError()}; }
      return {success: true, subscription: super.getResult('subscription') as ISubscription};
    }
    return {success: false, error: 'VerificationError'};
  }

  /**
   * Retrieve subscription from the Braintree vault
   * @param {string} subscriptionId Subscription unique index
   */
  public async retrieve(subscriptionId: string) {
    await super.retrieve(subscriptionId);
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, subscription: super.getResult() as ISubscription};
  }

  /**
   * Update subscription in the Braintree vault
   * @param {string} subscriptionId Subscription unique index
   * @param {ISubscription} updatedObject Update for the subscription
   */
  public async update(subscriptionId: string, updatedObject: ISubscription) {
    await super.update(subscriptionId, updatedObject);
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, subscription: super.getResult('subscription') as ISubscription};
  }

  /**
   * Deletes subscription from the Braintree vault
   * @param {string} subscriptionId Subscription unique index
   */
  public async delete(subscriptionId: string) {
    await super.call(super.instance().cancel(subscriptionId));
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, subscription: {deleted: true}};
  }

}
