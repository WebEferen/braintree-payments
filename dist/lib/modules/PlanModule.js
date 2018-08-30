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
class PlanModule extends Module_1.default {
    /**
     * Constructor
     * @param {object} instance Braintree plan instance
     */
    constructor(instance) {
        super(instance);
    }
    /**
     * Gets all of the plans from the braintree
     * @returns {success: true, plans: IPlan}
     */
    all() {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            const plansCollection = yield _super("getInstance").call(this).all();
            return plansCollection;
        });
    }
    /**
     * Finds specific plan in the braintree plans
     * @param planId Plan unique index (from braintree)
     */
    find(planId) {
        return __awaiter(this, void 0, void 0, function* () {
            const all = yield this.all();
            const foundedPlan = _.find(all.plans, (plan) => plan.id === planId);
            if (foundedPlan) {
                return { success: true, plan: foundedPlan };
            }
            return { success: false, error: 'NotFound' };
        });
    }
}
exports.default = PlanModule;
//# sourceMappingURL=PlanModule.js.map