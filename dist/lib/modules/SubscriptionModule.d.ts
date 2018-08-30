import Module from '../abstracts/Module';
import ISubscription from '../interfaces/ISubscription';
export default class SubscriptionModule extends Module {
    /**
     * Constructor
     * @param {object} instance Braintree subscription instance
     */
    constructor(instance: any);
    /**
     * Creates a subscription for the braintree
     * @param {ISubscription} newSubscription Subscription object
     */
    create(newSubscription: ISubscription): Promise<ISubscription | {
        success: boolean;
        error: any;
    }>;
    /**
     * Finds specific subscription from the braintree database
     * @param {string} subscriptionId Subscription unique index
     */
    find(subscriptionId: string): Promise<{
        success: boolean;
        error: any;
        subscription?: undefined;
    } | {
        success: boolean;
        subscription: ISubscription;
        error?: undefined;
    }>;
    /**
     * Updates specific subscription
     * @param {string} subscriptionId Subscription unique index
     * @param {ISubscription} updatedSubscription Updated subscription details like price | planId
     */
    update(subscriptionId: string, updatedSubscription: ISubscription): Promise<{
        success: boolean;
        error: any;
        subscription?: undefined;
    } | {
        success: boolean;
        subscription: ISubscription;
        error?: undefined;
    }>;
    /**
     * Cancels specific subscription
     * @param {string} subscriptionId Subscription unique index
     */
    cancel(subscriptionId: string): Promise<{
        success: boolean;
        error: any;
    } | {
        success: boolean;
        error?: undefined;
    }>;
}
