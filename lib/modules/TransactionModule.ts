import ITransaction from '../interfaces/ITransaction';
import TransactionValidator from '../validators/TransactionValidator';

export default class TransactionModule {

  private transaction: any;

  constructor(transaction: any) {
    this.transaction = transaction;
  }

  public async create(newTransaction: ITransaction) {
    const validator = new TransactionValidator(newTransaction);
    if (validator.verify()) {
      try {
      const transaction = await this.transaction.sale(newTransaction);
      return transaction as ITransaction;
      } catch (error) { return {status: false}; }
    }
    return {success: false};
  }

  public async find(transactionId: string) {
    return 'find';
  }

  public async update(transactionId: string, updatedTransaction: ITransaction) {
    return 'update';
  }

  public async delete(transactionId: string) {
    return 'delete';
  }

}
