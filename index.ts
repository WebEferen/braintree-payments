import Braintree from './lib/Braintree';
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
