import Validator from '../abstracts/Validator';
export default class TransactionValidator extends Validator {
    verifyPattern: string[];
    constructor(modelToVerify: object);
    verify(): boolean;
}
