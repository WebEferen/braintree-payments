import * as _ from 'lodash';
import ICurrency from '../interfaces/ICurrency';

export default abstract class Module {

  public error: any;
  public result: any;
  private instance: any;

  /**
   * Constructor
   * @param instance Braintree instance
   */
  constructor(instance: any) {
    this.instance = instance;
  }

  /**
   * Gets instance
   */
  protected getInstance() {
    return this.instance;
  }

  /**
   * Gets currencies object
   */
  protected getCurrencies() {
    return this.getConfig().currencies as ICurrency[];
  }

  /**
   * Gets config object
   */
  protected getConfig() {
    return this.getInstance().config;
  }

  /**
   * Gets default currency account
   */
  protected getDefaultCurrency() {
    const currency = this.getConfig().defaultCurrency;
    const foundedCurrency = this.getCurrency(currency);
    /* istanbul ignore next */
    if (foundedCurrency) { return foundedCurrency as ICurrency; }
    /* istanbul ignore next */
    return this.getCurrencies()[0] as ICurrency;
  }

  /**
   * Get specific currency
   * @param currency Currency short name in uppercase (eg. USD)
   * @returns Returns ICurrency object if found othervise undefined
   */
  protected getCurrency(currency: string) {
    const foundedCurrency = _.find(this.getCurrencies(), {currency});
    /* istanbul ignore next */
    return (foundedCurrency) ? foundedCurrency as ICurrency : undefined;
  }

}
