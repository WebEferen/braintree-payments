import Module from '../abstracts/Module';
export default class ClientTokenModule extends Module {
    /**
     * Constructor
     * @param {object} instance Braintree clientToken instance
     */
    constructor(instance: any);
    /**
     * Generates payment token for the given customer
     * @param customerId Customer unique id
     */
    generateByCustomerId(customerId: string): Promise<{
        success: boolean;
        error: string;
        token?: undefined;
    } | {
        success: boolean;
        token: any;
        error?: undefined;
    }>;
    /**
     * Generates payment token
     */
    generate(): Promise<{
        success: boolean;
        token: any;
    }>;
}
