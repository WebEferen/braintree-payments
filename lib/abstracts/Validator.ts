import * as _ from 'lodash';

export default abstract class Validator {

  public verifyPattern: string[];
  public modelToVerify: object;
  private errorMessage: string = '';
  private errorType: string = '';

  /**
   * Model verifier constructor
   * @param modelToVerify Validation model
   * @param verifyPattern Validation pattern
   */
  constructor(modelToVerify: object, verifyPattern: string[] = []) {
    this.modelToVerify = modelToVerify;
    this.verifyPattern = verifyPattern;
  }

  /**
   * Set verify pattern based on the keys provided
   * @param {string[]} pattern Pattern keys array
   */
  public setVerifyPattern(pattern: string[]) {
    this.verifyPattern = pattern;
  }

  /**
   * Checks if verification succeed
   */
  public isOk() {
    const modelKeys: string[] = _.keys(this.modelToVerify);
    const difference = this.checkIsOk(_.difference(this.verifyPattern, modelKeys));
    return (difference.length > 0) ? false : true;
  }

  /**
   * Gets a list of errors
   */
  public getErrors() {
    return {type: this.errorType, message: this.errorMessage};
  }

  /**
   * Checker for the specific scenarios
   * @param {string[]} difference Model keys to check
   */
  private checkIsOk(difference: string[]) {
    if (difference.length > 0) {
      this.errorType = 'validation_error';
      this.errorMessage = 'Fields: [' + difference.join(',') + '] are required!';
    }
    return difference;
  }
}
