import Validator from '../abstracts/Validator';

export default class CustomerValidator extends Validator {

  public verifyPattern = ['email', 'customFields'];

  /**
   * Model pattern constructor
   * @param modelToVerify Model to verify
   */
  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }
}
