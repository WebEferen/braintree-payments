"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("../abstracts/Validator");
class TransactionValidator extends Validator_1.default {
    constructor(modelToVerify) {
        super(modelToVerify);
        this.verifyPattern = ['amount', 'customerId', 'paymentMethodNonce'];
        super.setVerifyPattern(this.verifyPattern);
    }
    verify() {
        return super.verify();
    }
}
exports.default = TransactionValidator;
//# sourceMappingURL=TransactionValidator.js.map