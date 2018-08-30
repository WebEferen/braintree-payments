import ICurrency from '../interfaces/ICurrency';
export default abstract class Module {
    error: any;
    result: any;
    private instance;
    /**
     * Constructor
     * @param instance Braintree instance
     */
    constructor(instance: any);
    /**
     * Gets instance
     */
    protected getInstance(): any;
    /**
     * Gets currencies object
     */
    protected getCurrencies(): ICurrency[];
    /**
     * Gets config object
     */
    protected getConfig(): any;
    /**
     * Gets default currency account
     */
    protected getDefaultCurrency(): ICurrency;
    /**
     * Get specific currency
     * @param currency Currency short name in uppercase (eg. USD)
     * @returns Returns ICurrency object if found othervise undefined
     */
    protected getCurrency(currency: string): ICurrency | undefined;
}
