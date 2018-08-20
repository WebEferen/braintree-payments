import * as braintree from 'braintree';

import CustomerModule from './modules/CustomerModule';
import PlanModule from './modules/PlanModule';
import SubscriptionModule from './modules/SubscriptionModule';
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

    public getConfig(key: string | null = null) {
        switch ((key) ? key : null) {
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

    public connect() {
        if (!this.config) { return false; }
        this.gateway = braintree.connect(this.config);
        if (!this.gateway) { return false; }
        return true;
    }

    public getGateway() {
        return this.gateway;
    }

    public getModule(moduleName: string) {
        moduleName = moduleName.toLowerCase();

        if (this.getGateway().hasOwnProperty(moduleName)) {
            const gateway = this.getGateway()[moduleName];

            switch (moduleName) {
                case 'customer':
                    return new CustomerModule(gateway);
                case 'subscription':
                    return new SubscriptionModule(gateway);
                case 'plan':
                    return new PlanModule(gateway);
                case 'transaction':
                    return new TransactionModule(gateway);
            }
        }

        return undefined;
    }
}
