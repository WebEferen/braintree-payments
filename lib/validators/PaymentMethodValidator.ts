import Validator from '../helpers/Validator';

export default class PaymentMethodValidator extends Validator {

  public verifyPattern = ['customerId', 'paymentMethodNonce'];

  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }

  public verify() {
    return super.verify();
  }
}