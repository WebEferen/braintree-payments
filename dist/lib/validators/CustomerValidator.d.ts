import Validator from '../abstracts/Validator';
export default class CustomerValidator extends Validator {
    verifyPattern: string[];
    constructor(modelToVerify: object);
    verify(): boolean;
}
