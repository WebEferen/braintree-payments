import Braintree from './lib/Braintree';

/**
 * Braintree gateway
 * @param {Object} braintreeConfig - Configuration for the Braintree
 */
export function Payments(braintreeConfig : Object) {
  const btGateway = new Braintree(braintreeConfig);
  return btGateway;
}