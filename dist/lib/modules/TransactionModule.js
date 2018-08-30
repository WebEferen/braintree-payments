"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const await_to_js_1 = require("await-to-js");
const Module_1 = require("../abstracts/Module");
const TransactionValidator_1 = require("../validators/TransactionValidator");
class TransactionModule extends Module_1.default {
    /**
     * Constructor
     * @param {object} instance Braintree transaction instance
     */
    constructor(instance) {
        super(instance);
    }
    /**
     * Creates transaction based on the object provided
     * @param {ITransaction} newTransaction Transaction object
     */
    sale(newTransaction) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const validator = new TransactionValidator_1.default(newTransaction);
            if (validator.verify()) {
                /* istanbul ignore next */
                if (!newTransaction.merchantAccountId) {
                    newTransaction.merchantAccountId = _super("getDefaultCurrency").call(this).account;
                }
                [this.error, this.result] = yield await_to_js_1.default(_super("getInstance").call(this).sale(newTransaction));
                /* istanbul ignore next */
                if (this.error) {
                    return { success: false, error: this.error.type };
                }
                return { success: this.result.success, transaction: this.result.transaction };
            }
            return { success: false, error: 'VerificationFailed' };
        });
    }
    /**
     * Finds transaction by the unique transaction id
     * @param {String} transactionId Transaction unique ID
     */
    find(transactionId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.default(_super("getInstance").call(this).find(transactionId));
            if (!this.error) {
                return { success: true, transaction: this.result };
            }
            return { success: false, error: this.error.type };
        });
    }
    /**
     * Refunds transaction by the unique transaction id
     * @param {String} transactionId Transaction unique ID
     */
    refund(transactionId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.default(_super("getInstance").call(this).refund(transactionId));
            if (!this.error) {
                return { success: true, transaction: this.result };
            }
            return { success: false, error: this.error.type };
        });
    }
    /**
     * Cancels transaction lock by the unique transaction id
     * @param {String} transactionId Transaction unique ID
     */
    cancelRelease(transactionId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.default(_super("getInstance").call(this).cancelRelease(transactionId));
            if (!this.error) {
                return { success: true, transaction: this.result };
            }
            return { success: false, error: this.error.type };
        });
    }
}
exports.default = TransactionModule;
//# sourceMappingURL=TransactionModule.js.map