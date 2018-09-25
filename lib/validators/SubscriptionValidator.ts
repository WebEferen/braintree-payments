import Validator from '../abstracts/Validator';

export default class SubscriptionValidator extends Validator {

  public verifyPattern = ['planId'];

  /**
   * Model pattern constructor
   * @param modelToVerify Model to verify
   */
  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }
}
