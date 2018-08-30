"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class Module {
    /**
     * Constructor
     * @param instance Braintree instance
     */
    constructor(instance) {
        this.instance = instance;
    }
    /**
     * Gets instance
     */
    getInstance() {
        return this.instance;
    }
    /**
     * Gets currencies object
     */
    getCurrencies() {
        return this.getConfig().currencies;
    }
    /**
     * Gets config object
     */
    getConfig() {
        return this.getInstance().config;
    }
    /**
     * Gets default currency account
     */
    getDefaultCurrency() {
        const currency = this.getConfig().defaultCurrency;
        const foundedCurrency = this.getCurrency(currency);
        /* istanbul ignore next */
        if (foundedCurrency) {
            return foundedCurrency;
        }
        /* istanbul ignore next */
        return this.getCurrencies()[0];
    }
    /**
     * Get specific currency
     * @param currency Currency short name in uppercase (eg. USD)
     * @returns Returns ICurrency object if found othervise undefined
     */
    getCurrency(currency) {
        const foundedCurrency = _.find(this.getCurrencies(), { currency });
        /* istanbul ignore next */
        return (foundedCurrency) ? foundedCurrency : undefined;
    }
}
exports.default = Module;
//# sourceMappingURL=Module.js.map