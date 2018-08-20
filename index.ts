import Braintree from './lib/Braintree';
import IConfig from './lib/interfaces/IConfig';

/**
 * Braintree gateway
 * @param {IConfig} braintreeConfig - Configuration for the Braintree
 * @param {Boolean} connect - If true connect to braintree instantly
 */
export function Payments(braintreeConfig: IConfig) {
  const btGateway = new Braintree(braintreeConfig);
  btGateway.connect();
  return btGateway;
}
