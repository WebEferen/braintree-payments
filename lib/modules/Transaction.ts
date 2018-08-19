export class Transaction {

  private braintree: any;

  constructor(braintree: any) {
    this.braintree = braintree;
  }

  public get() {
    return 'get';
  }

  public create() {
    return 'create';
  }

  public find() {
    return 'find';
  }
}
