import Validator from '../helpers/Validator';

export default class CustomerValidator extends Validator {

  public verifyPattern = ['id', 'firstName', 'lastName'];

  constructor(modelToVerify: object) {
    super(modelToVerify);
    super.setVerifyPattern(this.verifyPattern);
  }

  public verify() {
    return super.verify();
  }
}
