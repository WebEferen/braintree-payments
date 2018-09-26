import to from 'await-to-js';

// import IListOption from '../interfaces/IListOption';
// import IOption from '../interfaces/IOption';

export default abstract class Module {

  public error: any;
  public result: any;
  private model: any;
  private sModel: any;

  /**
   * Initialises model instance
   * @param {any} model Current model instance
   * @param {any} secondaryModel Secondary model if needed
   */
  constructor(model: any, secondaryModel: any = null) {
    this.model = model;
    this.sModel = secondaryModel;
  }

  /**
   * Create record in the Stripe vault
   * @param {any} creationObject Object with creation details
   */
  public async create(creationObject: any) {
    return this.call(this.instance().create(creationObject));
  }

  /**
   * Finds record based for the specific index key
   * @param {string} findingId Unique finding index
   * istanbul ignore next
   */
  public async retrieve(findingId: string) {
    return this.call(this.instance().find(findingId));
  }

  /**
   * Update specific record in the Stripe vault
   * @param {string} findingId Unique finding index
   * @param {any} updatedObject Object with update details
   */
  public async update(findingId: string, updatedObject: any) {
    return this.call(this.instance().update(findingId, updatedObject));
  }

  /**
   * Deletes customer / invoice from the Stripes vault
   * @param {string} findingId Unique finding index
   */
  public async delete(findingId: string) {
    return this.call(this.instance().delete(findingId));
  }

  /**
   * List records from the Stripe model
   */
  public async list() {
    return this.call(this.instance().all());
  }

  /**
   * Method caller
   * @param {any} method Method async
   */
  protected async call(method: any) {
    [this.error, this.result] = await to(method);
    this.error = this.catchUnexpectedError(this.result);
    return (this.error) ? this.error : this.result;
  }

  /**
   * Instance getter
   * @param {boolean} secondaryModel Gets secondary model instance if needed
   */
  protected instance(secondaryModel: boolean = false) {
    return (secondaryModel) ? this.sModel : this.model;
  }

  /**
   * Gets query result
   * @param {string} deeperObject If needed go deeper
   */
  protected getResult(deeperObject: string = '') {
    return (deeperObject.length === 0) ? this.result : this.result[deeperObject];
  }

  /**
   * Error checker
   */
  protected isError() {
    return (this.error) ? true : false;
  }

  /**
   * Error getter
   */
  protected getError() {
    return this.parseResponse(this.error);
  }

  /**
   * Error handler
   * @param error Error response
   */
  private catchUnexpectedError(error: any) {
    if (error !== undefined && error.errors) { return error; }
    return this.error;
  }

  /**
   * Response error parser
   * @param {any} error Error object
   */
  private parseResponse(error: any) {
    const message = error.message;
    const verification = error.verification;
    return (verification) ? verification : message;
  }
}
