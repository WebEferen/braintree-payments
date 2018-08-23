import to from 'await-to-js';
import ITransaction from '../interfaces/ITransaction';
import TransactionValidator from '../validators/TransactionValidator';

export default class TransactionModule {

  private transaction: any;
  private error: any;
  private result: any;

  /**
   * Constructor
   * @param {object} transaction Braintree transaction instance
   */
  constructor(transaction: any) {
    this.transaction = transaction;
  }

  /**
   * Creates transaction based on the object provided
   * @param {ITransaction} newTransaction Transaction object
   */
  public async sale(newTransaction: ITransaction) {
    const validator = new TransactionValidator(newTransaction);
    if (validator.verify()) {
      [this.error, this.result] = await to(this.transaction.sale(newTransaction));
      return {success: this.result.success, transaction: this.result.transaction as ITransaction};
    }
    return {success: false, error: 'VerificationFailed'};
  }

  /**
   * Finds transaction by the unique transaction id
   * @param {String} transactionId Transaction unique ID
   */
  public async find(transactionId: string) {
    [this.error, this.result] = await to(this.transaction.find(transactionId));
    if (!this.error) { return {success: true, transaction: this.result as ITransaction}; }
    return {success: false, error: this.error.type};
  }

  /**
   * Refunds transaction by the unique transaction id
   * @param {String} transactionId Transaction unique ID
   */
  public async refund(transactionId: string) {
    [this.error, this.result] = await to(this.transaction.refund(transactionId));
    if (!this.error) { return {success: true, transaction: this.result as ITransaction}; }
    return {success: false, error: this.error.type};
  }

  /**
   * Cancels transaction lock by the unique transaction id
   * @param {String} transactionId Transaction unique ID
   */
  public async cancelRelease(transactionId: string) {
    [this.error, this.result] = await to(this.transaction.cancelRelease(transactionId));
    if (!this.error) { return {success: true, transaction: this.result as ITransaction}; }
    return {success: false, error: this.error.type};
  }
}
