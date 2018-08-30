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
    private config;
    private currencies;
    private defaultCurrency;
    private gateway;
    /**
     * Braintree Module constructor
     * @param config Config for the braintree
     * @param {ICurrency[]} currencies Currencies collection
     * @param {string | null} defaultCurrency Default currency name (eg. 'EUR')
     */
    constructor(config: IConfig, currencies: ICurrency[], defaultCurrency: string);
    /**
     * Connects manually to braintree API
     */
    connect(): void;
    /**
     * Sets actual currencies
     */
    setConfig(): void;
    /**
     * Gets specific config
     * @param key Gets config value by key or get all values
     */
    getConfig(key: string): any;
    /**
     * Gets module based on the provided name
     * @param moduleName Name of the module
     */
    getModule(moduleName: string): AddOnModule | ClientTokenModule | CustomerModule | PaymentMethodModule | PaymentMethodNonceModule | PlanModule | SubscriptionModule | TransactionModule | undefined;
    /**
     * Gets into gateway
     * @param {String | null} gateway Specify gateway or gets all
     */
    getGateway(gateway?: string | null): any;
}
