import * as braintree from 'braintree';

import CustomerModule from './modules/CustomerModule';
import PlanModule from './modules/PlanModule';
// import SubscriptionModule from './modules/SubscriptionModule';
import TransactionModule from './modules/TransactionModule';

import IConfig from './interfaces/IConfig';

export default class Braintree {

    private config: IConfig;
    private gateway: any;

    /**
     * Braintree Module constructor
     * @param config Config for the braintree
     */
    constructor(config: IConfig) {
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
        moduleName = moduleName.toLowerCase();

        if (this.getGateway().hasOwnProperty(moduleName)) {
            const gateway = this.getGateway()[moduleName];

            switch (moduleName) {
                case 'customer':
                    return new CustomerModule(gateway);
                // case 'subscription':
                //     return new SubscriptionModule(gateway);
                case 'plan':
                    return new PlanModule(gateway);
                case 'transaction':
                    return new TransactionModule(gateway);
            }
        }
        return undefined;
    }

    /**
     * Gets into gateway
     */
    private getGateway() {
        return this.gateway;
    }
}
