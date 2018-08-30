import Module from '../abstracts/Module';
import IPlan from '../interfaces/IPlan';
export default class PlanModule extends Module {
    /**
     * Constructor
     * @param {object} instance Braintree plan instance
     */
    constructor(instance: any);
    /**
     * Gets all of the plans from the braintree
     * @returns {success: true, plans: IPlan}
     */
    all(): Promise<any>;
    /**
     * Finds specific plan in the braintree plans
     * @param planId Plan unique index (from braintree)
     */
    find(planId: string): Promise<{
        success: boolean;
        plan: IPlan;
        error?: undefined;
    } | {
        success: boolean;
        error: string;
        plan?: undefined;
    }>;
}
