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
class PaymentMethodNonceModule extends Module_1.default {
    /**
     * Constructor
     * @param instance Instance of the paymentMethodNonce
     */
    constructor(instance) {
        super(instance);
    }
    /**
     * Creates paymentMethodNonce from the token
     * @param paymentMethodToken Payment method unique token
     */
    create(paymentMethodToken) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.to(_super("getInstance").call(this).create(paymentMethodToken));
            if (this.error) {
                return { success: false, error: this.error.type };
            }
            return this.result;
        });
    }
}
exports.default = PaymentMethodNonceModule;
//# sourceMappingURL=PaymentMethodNonceModule.js.map