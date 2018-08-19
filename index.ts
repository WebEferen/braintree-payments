import Braintree from './lib/Braintree';

/**
 * Braintree gateway
 * @param {Object} braintreeConfig - Configuration for the Braintree
 */
export function Payments(braintreeConfig: object) {
  const btGateway = new Braintree(braintreeConfig);
  return btGateway;
}
