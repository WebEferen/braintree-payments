"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class Validator {
    constructor(modelToVerify, verifyPattern = []) {
        this.modelToVerify = modelToVerify;
        this.verifyPattern = verifyPattern;
    }
    setVerifyPattern(pattern) {
        this.verifyPattern = pattern;
    }
    verify() {
        const modelKeys = _.keys(this.modelToVerify);
        const difference = _.difference(this.verifyPattern, modelKeys);
        return (difference.length > 0) ? false : true;
    }
}
exports.default = Validator;
//# sourceMappingURL=Validator.js.map