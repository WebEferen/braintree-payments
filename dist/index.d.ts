import Braintree from './lib/Braintree';
import IConfig from './lib/interfaces/IConfig';
import ICurrency from './lib/interfaces/ICurrency';
/**
 * Braintree Payments Module
 * @param braintreeConfig Config of the braintree
 * @param currencies Currencies collection
 * @param defaultCurrency Specify default currency (eg. 'EUR')
 */
export declare function Payments(braintreeConfig: IConfig, currencies: ICurrency[], defaultCurrency?: string): Braintree;
/**
 * Gets the enviroment
 * @param {String} environmentName Environment name: Sandbox | Qa | Production
 */
export declare function Environment(environmentName: string): any;
