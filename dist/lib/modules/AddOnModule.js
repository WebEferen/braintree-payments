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
const _ = require("lodash");
const Module_1 = require("../abstracts/Module");
class AddOnModule extends Module_1.default {
    /**
     * Constructor
     * @param {object} instance Braintree addOn instance
     */
    constructor(instance) {
        super(instance);
    }
    /**
     * Gets all of the addons from the braintree
     */
    all() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const addOnsCollection = yield _super("getInstance").call(this).all();
            return addOnsCollection;
        });
    }
    /**
     * Finds specific addon in the braintree addons
     * @param addonId Addon unique index (from braintree)
     */
    find(addonId) {
        return __awaiter(this, void 0, void 0, function* () {
            const all = yield this.all();
            const foundedAddon = _.find(all.addOns, (addOn) => addOn.id === addonId);
            if (foundedAddon) {
                return { success: true, addOn: foundedAddon };
            }
            return { success: false, error: 'NotFound' };
        });
    }
}
exports.default = AddOnModule;
//# sourceMappingURL=AddOnModule.js.map