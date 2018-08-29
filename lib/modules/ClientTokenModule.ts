import Module from '../helpers/Module';

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
   * @param customerId Customer unique id
   */
  public async generateByCustomerId(customerId: string) {
    const token = await super.getInstance().generate({customerId: customerId as string});
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
