import Module from '../abstracts/Module';

export default class ClientTokenModule extends Module {

  /**
   * Constructor
   * @param {object} instance Braintree clientToken instance
   */
  constructor(instance: any) { super(instance); }

  /**
   * Generates payment token
   * @param {string} customerId Customer unique index (not needed)
   */
  public async generate(customerId: string = '') {
    (customerId.length !== 0) ?
      await super.call(super.instance().generate()) :
      await super.call(super.instance().generate({customerId}));
    /* istanbul ignore next */
    if (super.isError()) { return {success: false, error: super.getError()}; }
    return {success: true, token: super.getResult('clientToken')};
  }

}
