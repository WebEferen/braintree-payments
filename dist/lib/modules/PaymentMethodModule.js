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
const PaymentMethodValidator_1 = require("../validators/PaymentMethodValidator");
class PaymentMethodModule extends Module_1.default {
    /**
     * Constructor
     * @param {object} instance Instance of the PaymentMethod
     */
    constructor(instance) {
        super(instance);
    }
    /**
     * Creates paymentMethod object inside braintree database
     * @param paymentMethod PaymentMethod object
     */
    /* istanbul ignore next */
    create(paymentMethod) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const validator = new PaymentMethodValidator_1.default(paymentMethod);
            if (validator.verify()) {
                [this.error, this.result] = yield await_to_js_1.to(_super("getInstance").call(this).create(paymentMethod));
                if (!this.error) {
                    return this.result;
                }
                return { success: false, error: this.error.type };
            }
            return { success: false, error: 'VerificationError' };
        });
    }
    /**
     * Finds paymentMethod by the given token
     * @param token Unique token from braintree
     */
    find(token) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.to(_super("getInstance").call(this).find(token));
            if (this.error) {
                return { success: false, error: this.error.type };
            }
            return { success: true, paymentMethod: this.result };
        });
    }
    /**
     * Updates paymentMethod from the braintree
     * @param token Unique token from braintree
     * @param updatedPaymentMethod Updated paymentMethod object
     */
    /* istanbul ignore next */
    update(token, updatedPaymentMethod) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.to(_super("getInstance").call(this).update(token, updatedPaymentMethod));
            if (this.error) {
                return { success: false, error: this.error.type };
            }
            return { success: true, paymentMethod: this.result };
        });
    }
    /**
     * Deletes paymentMethod from the braintree
     * @param token Unique token from braintree
     */
    /* istanbul ignore next */
    delete(token) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.to(_super("getInstance").call(this).delete(token));
            if (!this.error) {
                return { success: true };
            }
            return { success: false, error: this.error.type };
        });
    }
}
exports.default = PaymentMethodModule;
//# sourceMappingURL=PaymentMethodModule.js.map