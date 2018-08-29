import {to} from 'await-to-js';
import Module from '../helpers/Module';
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
      if (this.error) { return {success: false, error: this.error.type}; }
      return this.result as ISubscription;
    }
    return {success: false, error: 'VerificationError'};
  }

}
