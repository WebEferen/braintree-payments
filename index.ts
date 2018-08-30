import Braintree from './lib/Braintree';

import CheckoutHelper from './lib/helpers/CheckoutHelper';
import EnvironmentHelper from './lib/helpers/EnvironmentHelper';

import IConfig from './lib/interfaces/IConfig';
import ICurrency from './lib/interfaces/ICurrency';

/**
 * Braintree gateway
 * @param {IConfig} braintreeConfig - Configuration for the Braintree
 */
export function Payments(braintreeConfig: IConfig, currencies: ICurrency[] = []) {
  const btGateway = new Braintree(braintreeConfig);
  btGateway.connect();
  btGateway.setCurrencies(currencies);
  return btGateway;
}

/**
 * Fast checkout helper
 * @param braintreeConfig Configuration for the braintree
 */
export function Checkout(braintreeConfig: IConfig) {
  const checkout = new CheckoutHelper(braintreeConfig);
  return checkout;
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
