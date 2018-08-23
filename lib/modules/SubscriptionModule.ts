import {to} from 'await-to-js';
import ISubscription from '../interfaces/ISubscription';
import SubscriptionValidator from '../validators/SubscriptionValidator';

export default class SubscriptionModule {

  private subscrpition: any;
  private error: any;
  private result: any;

  /**
   * Constructor
   * @param {object} subscrpition Braintree subscription instance
   */
  constructor(subscription: any) {
    this.subscrpition = subscription;
  }

  /**
   * Creates a subscription for the braintree
   * @param {ISubscription} newSubscription Subscription object
   */
  public async create(newSubscription: ISubscription) {
    const validator = new SubscriptionValidator(newSubscription);
    if (validator.verify()) {
      [this.error, this.result] = await to(this.subscrpition.create(newSubscription));
      if (this.error) { return {success: false, error: this.error.type}; }
      return this.result as ISubscription;
    }
    return {success: false, error: 'VerificationError'};
  }

}
