import Validator from '../helpers/Validator';

export default class TransactionValidator extends Validator {

  public verifyPattern = ['id', 'amount', 'customerId', 'orderId', 'paymentMethodNonce'];

  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }

  public verify() {
    return super.verify();
  }
}
