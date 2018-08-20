import to from 'await-to-js';
import ITransaction from '../interfaces/ITransaction';
import TransactionValidator from '../validators/TransactionValidator';

export default class TransactionModule {

  private transaction: any;

  constructor(transaction: any) {
    this.transaction = transaction;
  }

  public async create(newTransaction: ITransaction) {
    let err;
    let transaction;
    const validator = new TransactionValidator(newTransaction);
    if (validator.verify()) {
      [err, transaction] = await to(this.transaction.sale(newTransaction));
      return transaction as ITransaction;
    }
    return {success: false};
  }

  public async find(transactionId: string) {
    try {
      const transaction = await this.transaction.find(transactionId);
      return {transaction: transaction as ITransaction, success: true};
    } catch (e) { return {success: false, error: e}; }
  }

  public async refund(transactionId: string) {
    try {
      const transaction = await this.transaction.refund(transactionId);
      return {transaction: transaction as ITransaction, success: true};
    } catch (e) { return {success: false, error: e}; }
  }

  public async cancelRelease(transactionId: string) {
    try {
      const transaction = await this.transaction.cancelRelease(transactionId);
      return {transaction: transaction as ITransaction, success: true};
    } catch (e) { return {success: false, error: e}; }
  }

}
