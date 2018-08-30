"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const braintree = require("braintree");
const AddOnModule_1 = require("./modules/AddOnModule");
const ClientTokenModule_1 = require("./modules/ClientTokenModule");
const CustomerModule_1 = require("./modules/CustomerModule");
const PaymentMethodModule_1 = require("./modules/PaymentMethodModule");
const PaymentMethodNonceModule_1 = require("./modules/PaymentMethodNonceModule");
const PlanModule_1 = require("./modules/PlanModule");
const SubscriptionModule_1 = require("./modules/SubscriptionModule");
const TransactionModule_1 = require("./modules/TransactionModule");
class Braintree {
    /**
     * Braintree Module constructor
     * @param config Config for the braintree
     * @param {ICurrency[]} currencies Currencies collection
     * @param {string | null} defaultCurrency Default currency name (eg. 'EUR')
     */
    constructor(config, currencies, defaultCurrency) {
        this.defaultCurrency = defaultCurrency;
        this.currencies = currencies;
        this.config = config;
        return this;
    }
    /**
     * Connects manually to braintree API
     */
    connect() {
        this.gateway = braintree.connect(this.config);
    }
    /**
     * Sets actual currencies
     */
    setConfig() {
        this.gateway.config = this.config;
        this.gateway.config.currencies = this.currencies;
        this.gateway.config.defaultCurrency = this.defaultCurrency;
    }
    /**
     * Gets specific config
     * @param key Gets config value by key or get all values
     */
    getConfig(key) {
        switch (key) {
            case 'environment':
                return this.config.environment;
            case 'merchantId':
                return this.config.merchantId;
            case 'publicKey':
                return this.config.publicKey;
            case 'privateKey':
                return this.config.privateKey;
            default:
                return this.config;
        }
    }
    /**
     * Gets module based on the provided name
     * @param moduleName Name of the module
     */
    getModule(moduleName) {
        if (this.getGateway().hasOwnProperty(moduleName)) {
            const gateway = this.getGateway()[moduleName];
            gateway.config.config = this.config;
            gateway.config.currencies = this.currencies;
            gateway.config.defaultCurrency = this.defaultCurrency;
            switch (moduleName) {
                case 'customer':
                    return new CustomerModule_1.default(gateway);
                case 'subscription':
                    return new SubscriptionModule_1.default(gateway);
                case 'plan':
                    return new PlanModule_1.default(gateway);
                case 'transaction':
                    return new TransactionModule_1.default(gateway);
                case 'clientToken':
                    return new ClientTokenModule_1.default(gateway);
                case 'paymentMethod':
                    return new PaymentMethodModule_1.default(gateway);
                case 'paymentMethodNonce':
                    return new PaymentMethodNonceModule_1.default(gateway);
                case 'addOn':
                    return new AddOnModule_1.default(gateway);
            }
        }
        return undefined;
    }
    /**
     * Gets into gateway
     * @param {String | null} gateway Specify gateway or gets all
     */
    getGateway(gateway = null) {
        if (gateway) {
            return this.gateway[gateway];
        }
        return this.gateway;
    }
}
exports.default = Braintree;
//# sourceMappingURL=Braintree.js.map