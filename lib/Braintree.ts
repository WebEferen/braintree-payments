import * as braintree from 'braintree';

import AddOnModule from './modules/AddOnModule';
import ClientTokenModule from './modules/ClientTokenModule';
import CustomerModule from './modules/CustomerModule';
import PaymentMethodModule from './modules/PaymentMethodModule';
import PaymentMethodNonceModule from './modules/PaymentMethodNonceModule';
import PlanModule from './modules/PlanModule';
import SubscriptionModule from './modules/SubscriptionModule';
import TransactionModule from './modules/TransactionModule';

import IConfig from './interfaces/IConfig';
import ICurrency from './interfaces/ICurrency';

export default class Braintree {

    private config: IConfig;
    private currencies: ICurrency[];
    private defaultCurrency: string;
    private gateway: any;

    /**
     * Braintree Module constructor
     * @param config Config for the braintree
     * @param {ICurrency[]} currencies Currencies collection
     * @param {string | null} defaultCurrency Default currency name (eg. 'EUR')
     */
    constructor(config: IConfig, currencies: ICurrency[], defaultCurrency: string) {
        this.defaultCurrency = defaultCurrency;
        this.currencies = currencies;
        this.config = config;
        return this;
    }

    /**
     * Connects manually to braintree API
     */
    public connect() {
        this.gateway = braintree.connect(this.config);
    }

    /**
     * Sets actual currencies
     */
    public setConfig() {
        this.gateway.config = this.config;
        this.gateway.config.currencies = this.currencies;
        this.gateway.config.defaultCurrency = this.defaultCurrency;
    }

    /**
     * Gets specific config
     * @param key Gets config value by key or get all values
     */
    public getConfig(key: string) {
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
                return this.config as IConfig;
        }
    }

    /**
     * Gets module based on the provided name
     * @param moduleName Name of the module
     */
    public getModule(moduleName: string) {
        if (this.getGateway().hasOwnProperty(moduleName)) {
            const gateway = this.getGateway()[moduleName];

            gateway.config.config = this.config;
            gateway.config.currencies = this.currencies;
            gateway.config.defaultCurrency = this.defaultCurrency;

            switch (moduleName) {
                case 'customer':
                    return new CustomerModule(gateway);
                case 'subscription':
                    return new SubscriptionModule(gateway);
                case 'plan':
                    return new PlanModule(gateway);
                case 'transaction':
                    return new TransactionModule(gateway);
                case 'clientToken':
                    return new ClientTokenModule(gateway);
                case 'paymentMethod':
                    return new PaymentMethodModule(gateway);
                case 'paymentMethodNonce':
                    return new PaymentMethodNonceModule(gateway);
                case 'addOn':
                    return new AddOnModule(gateway);
            }
        }
        return undefined;
    }

    /**
     * Gets into gateway
     * @param {String | null} gateway Specify gateway or gets all
     */
    public getGateway(gateway: string | null = null) {
        if (gateway) { return this.gateway[gateway]; }
        return this.gateway;
    }
}
