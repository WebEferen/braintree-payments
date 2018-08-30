import Module from '../abstracts/Module';
import IPaymentMethod from '../interfaces/IPaymentMethod';
export default class PaymentMethodModule extends Module {
    /**
     * Constructor
     * @param {object} instance Instance of the PaymentMethod
     */
    constructor(instance: any);
    /**
     * Creates paymentMethod object inside braintree database
     * @param paymentMethod PaymentMethod object
     */
    create(paymentMethod: IPaymentMethod): Promise<IPaymentMethod | {
        success: boolean;
        error: any;
    }>;
    /**
     * Finds paymentMethod by the given token
     * @param token Unique token from braintree
     */
    find(token: string): Promise<{
        success: boolean;
        error: any;
        paymentMethod?: undefined;
    } | {
        success: boolean;
        paymentMethod: IPaymentMethod;
        error?: undefined;
    }>;
    /**
     * Updates paymentMethod from the braintree
     * @param token Unique token from braintree
     * @param updatedPaymentMethod Updated paymentMethod object
     */
    update(token: string, updatedPaymentMethod: any): Promise<{
        success: boolean;
        error: any;
        paymentMethod?: undefined;
    } | {
        success: boolean;
        paymentMethod: any;
        error?: undefined;
    }>;
    /**
     * Deletes paymentMethod from the braintree
     * @param token Unique token from braintree
     */
    delete(token: string): Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
}
