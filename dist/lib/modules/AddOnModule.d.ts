import Module from '../abstracts/Module';
import IAddOn from '../interfaces/IAddOn';
export default class AddOnModule extends Module {
    /**
     * Constructor
     * @param {object} instance Braintree addOn instance
     */
    constructor(instance: any);
    /**
     * Gets all of the addons from the braintree
     */
    all(): Promise<any>;
    /**
     * Finds specific addon in the braintree addons
     * @param addonId Addon unique index (from braintree)
     */
    find(addonId: string): Promise<{
        success: boolean;
        addOn: IAddOn;
        error?: undefined;
    } | {
        success: boolean;
        error: string;
        addOn?: undefined;
    }>;
}
