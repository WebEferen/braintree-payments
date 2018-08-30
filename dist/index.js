"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Braintree_1 = require("./lib/Braintree");
const EnvironmentHelper_1 = require("./lib/helpers/EnvironmentHelper");
/**
 * Braintree Payments Module
 * @param braintreeConfig Config of the braintree
 * @param currencies Currencies collection
 * @param defaultCurrency Specify default currency (eg. 'EUR')
 */
function Payments(braintreeConfig, currencies, defaultCurrency = 'EUR') {
    const btGateway = new Braintree_1.default(braintreeConfig, currencies, defaultCurrency);
    btGateway.connect();
    btGateway.setConfig();
    return btGateway;
}
exports.Payments = Payments;
/**
 * Gets the enviroment
 * @param {String} environmentName Environment name: Sandbox | Qa | Production
 */
function Environment(environmentName) {
    const environment = EnvironmentHelper_1.default.get(environmentName);
    if (!environment) {
        return null;
    }
    return environment;
}
exports.Environment = Environment;
//# sourceMappingURL=index.js.map