import * as braintree from 'braintree';

export default class Environment {

  /**
   * Gets the environment
   * @param {string} environment Environment type: Development | Production | Sandbox | Qa
   */
  public static get(environment: string) {
    switch (environment) {
      case 'Sandbox':
        return braintree.Environment.Sandbox;
      case 'Qa':
        return braintree.Environment.Qa;
      case 'Production':
        return braintree.Environment.Production;
      case 'Development':
        return braintree.Environment.Development;
      default:
        return null;
    }
  }
}
