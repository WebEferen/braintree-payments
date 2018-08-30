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
const Module_1 = require("../abstracts/Module");
class ClientTokenModule extends Module_1.default {
    /**
     * Constructor
     * @param {object} instance Braintree clientToken instance
     */
    constructor(instance) {
        super(instance);
    }
    /**
     * Generates payment token for the given customer
     * @param customerId Customer unique id
     */
    generateByCustomerId(customerId) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            if (!customerId) {
                return { success: false, error: 'ValidationError' };
            }
            const token = yield _super("getInstance").call(this).generate({ customerId: customerId });
            return { success: true, token: token.clientToken };
        });
    }
    /**
     * Generates payment token
     */
    generate() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield _super("getInstance").call(this).generate();
            return { success: true, token: token.clientToken };
        });
    }
}
exports.default = ClientTokenModule;
//# sourceMappingURL=ClientTokenModule.js.map