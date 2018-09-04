import to from 'await-to-js';
import Module from '../abstracts/Module';
import ITransaction from '../interfaces/ITransaction';
import TransactionValidator from '../validators/TransactionValidator';

export default class TransactionModule extends Module {

  private mId: string = super.getDefaultCurrency().account;

  /**
   * Constructor
   * @param {object} instance Braintree transaction instance
   */
  constructor(instance: any) {
    super(instance);
  }

  /**
   * Creates transaction based on the object provided
   * @param {ITransaction} newTransaction Transaction object
   * @param {string} merchantAccountId Merchant account Id from the braintree
   */
  public async sale(newTransaction: ITransaction, merchantAccountId = this.mId) {
    newTransaction.merchantAccountId = merchantAccountId;
    const validator = new TransactionValidator(newTransaction);
    if (validator.verify()) {
      [this.error, this.result] = await to(super.getInstance().sale(newTransaction));
      /* istanbul ignore next */
      if (this.error) { return {success: false, type: this.error.type, error: this.error.message}; }
      return {success: this.result.success, transaction: this.result.transaction as ITransaction};
    }
    return {success: false, error: 'VerificationFailed'};
  }

  /**
   * Finds transaction by the unique transaction id
   * @param {String} transactionId Transaction unique ID
   */
  public async find(transactionId: string) {
    [this.error, this.result] = await to(super.getInstance().find(transactionId));
    if (!this.error) { return {success: true, transaction: this.result as ITransaction}; }
    return {success: false, type: this.error.type, error: this.error.message};
  }

  /**
   * Refunds transaction by the unique transaction id
   * @param {string} transactionId Transaction unique ID
   */
  public async refund(transactionId: string) {
    [this.error, this.result] = await to(super.getInstance().refund(transactionId));
    if (!this.error) { return {success: true, transaction: this.result as ITransaction}; }
    return {success: false, type: this.error.type, error: this.error.message};
  }

  /**
   * Cancels transaction lock by the unique transaction id
   * @param {string} transactionId Transaction unique ID
   */
  public async cancelRelease(transactionId: string) {
    [this.error, this.result] = await to(super.getInstance().cancelRelease(transactionId));
    if (!this.error) { return {success: true, transaction: this.result as ITransaction}; }
    return {success: false, type: this.error.type, error: this.error.message};
  }
}
