import to from 'await-to-js';
import Module from '../abstracts/Module';

export default class ClientTokenModule extends Module {

  private mId: string = super.getDefaultCurrency().account;

  /**
   * Constructor
   * @param {object} instance Braintree clientToken instance
   */
  constructor(instance: any) {
    super(instance);
  }

  /**
   * Generates payment token for the given customer
   * @param {string} customerId Customer unique id
   * @param {string} merchantAccountId Merchant account id
   */
  public async generateByCustomerId(customerId: string, merchantAccountId = this.mId) {
    /* istanbul ignore if */
    if (merchantAccountId === '') { merchantAccountId = super.getDefaultCurrency().account; }
    if (!customerId) { return {success: false, error: 'ValidationError'}; }
    [this.error, this.result] = await to(super.getInstance().generate({customerId, merchantAccountId}));
    /* istanbul ignore if */
    if (this.error) { return {success: false, error: this.error.type, message: this.error.message}; }
    return {success: true, token: this.result.clientToken};
  }

  /**
   * Generates payment token
   */
  public async generate() {
    const token = await super.getInstance().generate();
    return {success: true, token: token.clientToken};
  }

}
