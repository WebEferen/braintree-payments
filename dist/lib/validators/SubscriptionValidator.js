"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("../abstracts/Validator");
class SubscriptionValidator extends Validator_1.default {
    constructor(modelToVerify) {
        super(modelToVerify);
        this.verifyPattern = ['paymentMethodToken', 'planId', 'addOns'];
        super.setVerifyPattern(this.verifyPattern);
    }
    verify() {
        return super.verify();
    }
}
exports.default = SubscriptionValidator;
//# sourceMappingURL=SubscriptionValidator.js.map