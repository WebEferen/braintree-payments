"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("../abstracts/Validator");
/* istanbul ignore next */
class PaymentMethodValidator extends Validator_1.default {
    constructor(modelToVerify) {
        super(modelToVerify);
        this.verifyPattern = ['customerId', 'paymentMethodNonce'];
        super.setVerifyPattern(this.verifyPattern);
    }
    verify() {
        return super.verify();
    }
}
exports.default = PaymentMethodValidator;
//# sourceMappingURL=PaymentMethodValidator.js.map