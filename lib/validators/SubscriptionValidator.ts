import Validator from '../abstracts/Validator';

export default class SubscriptionValidator extends Validator {

  public verifyPattern = ['planId'];

  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }

  public verify() {
    return super.verify();
  }
}
