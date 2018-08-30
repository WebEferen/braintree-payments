import Validator from '../abstracts/Validator';
export default class SubscriptionValidator extends Validator {
    verifyPattern: string[];
    constructor(modelToVerify: object);
    verify(): boolean;
}
