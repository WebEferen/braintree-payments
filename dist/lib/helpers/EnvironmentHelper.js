"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const braintree = require("braintree");
class Environment {
    /**
     * Gets the environment
     * @param {string} environment Environment type: Development | Production | Sandbox | Qa
     */
    static get(environment) {
        switch (environment) {
            case 'Sandbox':
                return braintree.Environment.Sandbox;
            case 'Qa':
                return braintree.Environment.Qa;
            case 'Production':
                return braintree.Environment.Production;
            case 'Development':
                return braintree.Environment.Development;
            default:
                return null;
        }
    }
}
exports.default = Environment;
//# sourceMappingURL=EnvironmentHelper.js.map