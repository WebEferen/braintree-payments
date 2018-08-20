import ITransaction from '../interfaces/ITransaction';

export class Transaction {

  private transaction: any;

  constructor(transaction: any) {
    this.transaction = this.transaction;
  }

  public async create(newTransaction: ITransaction) {
    return 'create';
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
