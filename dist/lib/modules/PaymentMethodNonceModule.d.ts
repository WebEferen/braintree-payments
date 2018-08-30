import Module from '../abstracts/Module';
export default class PaymentMethodNonceModule extends Module {
    /**
     * Constructor
     * @param instance Instance of the paymentMethodNonce
     */
    constructor(instance: any);
    /**
     * Creates paymentMethodNonce from the token
     * @param paymentMethodToken Payment method unique token
     */
    create(paymentMethodToken: string): Promise<any>;
}
