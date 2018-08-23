import * as braintree from 'braintree';

export default class Environment {
  public static get(environment: string) {
    return braintree.Environment[environment];
  }
}
