import Module from '../abstracts/Module';
import ICustomer from '../interfaces/ICustomer';
export default class CustomerModule extends Module {
    /**
     * Constructor
     * @param {object} instance Braintree customer instance
     */
    constructor(instance: any);
    /**
     * Creates new customer inside braintree database
     * @param {ICustomer} customer Customer object
     */
    create(newCustomer: ICustomer): Promise<ICustomer | {
        success: boolean;
        error: any;
    }>;
    /**
     * Finds specific customer inside braintree database
     * @param {String} customerId Customer unique index
     */
    find(customerId: string): Promise<{
        success: boolean;
        customer: ICustomer;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        customer?: undefined;
    }>;
    /**
     * Updates specific customer inside braintree database
     * @param {String} customerId Customer unique index
     * @param {ICustomer} updatedCustomer Customer object
     */
    update(customerId: string, updatedCustomer: ICustomer): Promise<{
        success: boolean;
        customer: ICustomer;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        customer?: undefined;
    }>;
    /**
     * Deletes specific customer from braintree database
     * @param {String} customerId Customer unique index
     */
    delete(customerId: string): Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
}
