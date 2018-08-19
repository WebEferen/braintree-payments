import Braintree from './lib/Braintree';
import IConfig from './lib/interfaces/IConfig';

/**
 * Braintree gateway
 * @param {IConfig} braintreeConfig - Configuration for the Braintree
 */
export function Payments(braintreeConfig: IConfig) {
  const btGateway = new Braintree(braintreeConfig);
  return btGateway;
}
