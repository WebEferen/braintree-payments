import Validator from '../abstracts/Validator';

export default class CustomerValidator extends Validator {

  public verifyPattern = ['streetAddress', 'postalCode', 'locality', 'region'];

  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }

  public verify() {
    return super.verify();
  }
}
