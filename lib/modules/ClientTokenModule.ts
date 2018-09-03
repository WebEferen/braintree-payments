import Module from '../abstracts/Module';

export default class ClientTokenModule extends Module {

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
  public async generateByCustomerId(customerId: string, merchantAccountId = super.getDefaultCurrency().account) {
    if (!customerId) { return {success: false, error: 'ValidationError'}; }
    const token = await super.getInstance().generate({customerId, merchantAccountId});
    return {success: true, token: token.clientToken};
  }

  /**
   * Generates payment token
   */
  public async generate() {
    const token = await super.getInstance().generate();
    return {success: true, token: token.clientToken};
  }

}
