export default class ClientTokenModule {

  private clientToken: any;

  /**
   * Constructor
   * @param {object} clientToken Braintree clientToken instance
   */
  constructor(clientToken: any) {
    this.clientToken = clientToken;
  }

  /**
   * Generates payment token
   * @param customerId Customer unique id
   */
  public async generate(customerId: string) {
    const token = await this.clientToken.generate({customerId: customerId as string});
    return {success: true, token: token.clientToken};
  }

}
