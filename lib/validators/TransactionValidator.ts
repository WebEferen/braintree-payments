import Validator from '../abstracts/Validator';

export default class TransactionValidator extends Validator {

  public verifyPattern = ['amount', 'customerId', 'paymentMethodNonce'];

  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }

  public verify() {
    return super.verify();
  }
}
