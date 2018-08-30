import Module from '../abstracts/Module';
import ITransaction from '../interfaces/ITransaction';
export default class TransactionModule extends Module {
    /**
     * Constructor
     * @param {object} instance Braintree transaction instance
     */
    constructor(instance: any);
    /**
     * Creates transaction based on the object provided
     * @param {ITransaction} newTransaction Transaction object
     */
    sale(newTransaction: ITransaction): Promise<{
        success: boolean;
        error: any;
        transaction?: undefined;
    } | {
        success: any;
        transaction: ITransaction;
        error?: undefined;
    }>;
    /**
     * Finds transaction by the unique transaction id
     * @param {String} transactionId Transaction unique ID
     */
    find(transactionId: string): Promise<{
        success: boolean;
        transaction: ITransaction;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        transaction?: undefined;
    }>;
    /**
     * Refunds transaction by the unique transaction id
     * @param {String} transactionId Transaction unique ID
     */
    refund(transactionId: string): Promise<{
        success: boolean;
        transaction: ITransaction;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        transaction?: undefined;
    }>;
    /**
     * Cancels transaction lock by the unique transaction id
     * @param {String} transactionId Transaction unique ID
     */
    cancelRelease(transactionId: string): Promise<{
        success: boolean;
        transaction: ITransaction;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        transaction?: undefined;
    }>;
}
