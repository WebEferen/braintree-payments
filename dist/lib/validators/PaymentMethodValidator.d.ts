import Validator from '../abstracts/Validator';
export default class PaymentMethodValidator extends Validator {
    verifyPattern: string[];
    constructor(modelToVerify: object);
    verify(): boolean;
}
