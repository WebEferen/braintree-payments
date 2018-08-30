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
const SubscriptionValidator_1 = require("../validators/SubscriptionValidator");
class SubscriptionModule extends Module_1.default {
    /**
     * Constructor
     * @param {object} instance Braintree subscription instance
     */
    constructor(instance) {
        super(instance);
    }
    /**
     * Creates a subscription for the braintree
     * @param {ISubscription} newSubscription Subscription object
     */
    create(newSubscription) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const validator = new SubscriptionValidator_1.default(newSubscription);
            if (validator.verify()) {
                /* istanbul ignore next */
                if (!newSubscription.merchantAccountId) {
                    newSubscription.merchantAccountId = _super("getDefaultCurrency").call(this).account;
                }
                [this.error, this.result] = yield await_to_js_1.to(_super("getInstance").call(this).create(newSubscription));
                /* istanbul ignore if */
                if (this.error) {
                    return { success: false, error: this.error.type };
                }
                return this.result;
            }
            return { success: false, error: 'VerificationError' };
        });
    }
    /**
     * Finds specific subscription from the braintree database
     * @param {string} subscriptionId Subscription unique index
     */
    find(subscriptionId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.to(_super("getInstance").call(this).find(subscriptionId));
            if (this.error) {
                return { success: false, error: this.error.type };
            }
            return { success: true, subscription: this.result };
        });
    }
    /**
     * Updates specific subscription
     * @param {string} subscriptionId Subscription unique index
     * @param {ISubscription} updatedSubscription Updated subscription details like price | planId
     */
    update(subscriptionId, updatedSubscription) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.to(_super("getInstance").call(this).update(subscriptionId, updatedSubscription));
            if (this.error) {
                return { success: false, error: this.error.type };
            }
            return { success: true, subscription: this.result };
        });
    }
    /**
     * Cancels specific subscription
     * @param {string} subscriptionId Subscription unique index
     */
    cancel(subscriptionId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.to(_super("getInstance").call(this).cancel(subscriptionId));
            if (this.error) {
                return { success: false, error: this.error.type };
            }
            return { success: true };
        });
    }
}
exports.default = SubscriptionModule;
//# sourceMappingURL=SubscriptionModule.js.map