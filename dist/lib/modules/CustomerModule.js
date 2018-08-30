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
const CustomerValidator_1 = require("../validators/CustomerValidator");
class CustomerModule extends Module_1.default {
    /**
     * Constructor
     * @param {object} instance Braintree customer instance
     */
    constructor(instance) {
        super(instance);
    }
    /**
     * Creates new customer inside braintree database
     * @param {ICustomer} customer Customer object
     */
    create(newCustomer) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const validator = new CustomerValidator_1.default(newCustomer);
            if (validator.verify()) {
                [this.error, this.result] = yield await_to_js_1.default(_super("getInstance").call(this).create(newCustomer));
                /* istanbul ignore if */
                if (this.error) {
                    return { success: false, error: this.error.type };
                }
                return this.result;
            }
            return { success: false, error: 'ValidationError' };
        });
    }
    /**
     * Finds specific customer inside braintree database
     * @param {String} customerId Customer unique index
     */
    find(customerId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.default(_super("getInstance").call(this).find(customerId));
            if (!this.error) {
                return { success: true, customer: this.result };
            }
            return { success: false, error: this.error.type };
        });
    }
    /**
     * Updates specific customer inside braintree database
     * @param {String} customerId Customer unique index
     * @param {ICustomer} updatedCustomer Customer object
     */
    update(customerId, updatedCustomer) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.default(_super("getInstance").call(this).update(customerId, updatedCustomer));
            if (!this.error) {
                return { success: true, customer: this.result };
            }
            return { success: false, error: this.error.type };
        });
    }
    /**
     * Deletes specific customer from braintree database
     * @param {String} customerId Customer unique index
     */
    delete(customerId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            [this.error, this.result] = yield await_to_js_1.default(_super("getInstance").call(this).delete(customerId));
            if (!this.error) {
                return { success: true };
            }
            return { success: false, error: this.error.type };
        });
    }
}
exports.default = CustomerModule;
//# sourceMappingURL=CustomerModule.js.map