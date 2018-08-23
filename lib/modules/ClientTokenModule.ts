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
   * Generates payment token
   * @param customerId Customer unique id
   */
  public async generate(customerId: string) {
    const token = await super.getInstance().generate({customerId: customerId as string});
    return {success: true, token: token.clientToken};
  }

}
