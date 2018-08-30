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
     */
    all(): Promise<{
        success: boolean;
        plans: any;
    }>;
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
