import * as _ from 'lodash';

export default class Validator {

  public verifyPattern: string[];
  public modelToVerify: object;

  constructor(modelToVerify: object, verifyPattern: string[]) {
    this.modelToVerify = modelToVerify;
    this.verifyPattern = verifyPattern;
  }

  public verify() {
    const modelKeys: string[] = _.keys(this.modelToVerify);
    const difference = _.difference(this.verifyPattern, modelKeys);
    return (difference.length > 0) ? false : true;
  }
}
