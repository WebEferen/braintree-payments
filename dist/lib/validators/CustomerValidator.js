"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = require("../abstracts/Validator");
class CustomerValidator extends Validator_1.default {
    constructor(modelToVerify) {
        super(modelToVerify);
        this.verifyPattern = ['id', 'firstName', 'lastName'];
        super.setVerifyPattern(this.verifyPattern);
    }
    verify() {
        return super.verify();
    }
}
exports.default = CustomerValidator;
//# sourceMappingURL=CustomerValidator.js.map