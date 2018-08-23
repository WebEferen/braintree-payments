import Validator from '../helpers/Validator';

export default class SubscriptionValidator extends Validator {

  public verifyPattern = ['paymentMethodNonce', 'planId'];

  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }

  public verify() {
    return super.verify();
  }
}
