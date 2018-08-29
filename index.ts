import Braintree from './lib/Braintree';
import Environment from './lib/helpers/Environment';
import Simplifier from './lib/helpers/Simplifier';

import IConfig from './lib/interfaces/IConfig';

/**
 * Braintree gateway
 * @param {IConfig} braintreeConfig - Configuration for the Braintree
 */
export function Payments(braintreeConfig: IConfig) {
  const btGateway = new Braintree(braintreeConfig);
  btGateway.connect();
  return btGateway;
}

/**
 * Fast checkout helper
 * @param braintreeConfig Configuration for the braintree
 */
export function Checkout(braintreeConfig: IConfig) {
  const simplifier = new Simplifier(braintreeConfig);
  return simplifier;
}

/**
 * Gets the enviroment
 * @param {String} environmentName Environment name: Sandbox | Qa | Production
 */
export function getEnvironment(environmentName: string) {
  const environment = Environment.get(environmentName);
  if (!environment) { return null; }
  return environment;
}
