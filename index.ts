import Braintree from './lib/Braintree';

import EnvironmentHelper from './lib/helpers/EnvironmentHelper';
import IConfig from './lib/interfaces/IConfig';
import ICurrency from './lib/interfaces/ICurrency';

/**
 * Braintree Payments Module
 * @param braintreeConfig Config of the braintree
 * @param currencies Currencies collection
 * @param defaultCurrency Specify default currency (eg. 'EUR')
 */
export function Payments(braintreeConfig: IConfig, currencies: ICurrency[], defaultCurrency: string = 'EUR') {
  const btGateway = new Braintree(braintreeConfig, currencies, defaultCurrency);
  btGateway.connect();
  btGateway.setConfig();
  return btGateway;
}

/**
 * Gets the enviroment
 * @param {String} environmentName Environment name: Sandbox | Qa | Production
 */
export function Environment(environmentName: string) {
  const environment = EnvironmentHelper.get(environmentName);
  if (!environment) { return null; }
  return environment;
}
