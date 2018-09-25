import Validator from '../abstracts/Validator';

/* istanbul ignore next */
export default class PaymentMethodValidator extends Validator {

  public verifyPattern = ['customerId', 'paymentMethodNonce'];

  /**
   * Model pattern constructor
   * @param modelToVerify Model to verify
   */
  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }
}
