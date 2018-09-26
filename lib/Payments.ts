import * as braintree from 'braintree';

import AddOnModule from './modules/AddOnModule';
import ClientTokenModule from './modules/ClientTokenModule';
import CustomerModule from './modules/CustomerModule';
import PlanModule from './modules/PlanModule';
import SubscriptionModule from './modules/SubscriptionModule';

import IConfig from './interfaces/IConfig';

import Environment from './helpers/EnvironmentHelper';

export default class Payments {

    private provider: any;

    /**
     * Braintree Module constructor
     * @param config Config for the braintree
     */
    constructor(paymentsConfig: IConfig) {

        const parsedConfig = {
            environment: null,
            merchantId: paymentsConfig.merchant_id,
            privateKey: paymentsConfig.private_key,
            publicKey: paymentsConfig.public_key,
        };

        parsedConfig.environment = Environment.get(paymentsConfig.environment);
        this.provider = braintree.connect(parsedConfig);
    }

    /**
     * Customers model
     */
    public customers() {
        return new CustomerModule(this.provider.customer, this.provider.paymentMethod);
    }

    /**
     * Subscriptions model
     */
    public subscriptions() {
        return new SubscriptionModule(this.provider.subscription);
    }

    /**
     * Plans model
     */
    public plans() {
        return new PlanModule(this.provider.plan);
    }

    /**
     * Addons model
     */
    public products() {
        return new AddOnModule(this.provider.addOn);
    }

    /**
     * Token model
     */
    public tokens() {
        return new ClientTokenModule(this.provider.clientToken);
    }
}
