import * as _ from 'lodash';
import Module from '../abstracts/Module';
import IAddOn from '../interfaces/IAddOn';

export default class AddOnModule extends Module {

  /**
   * Constructor
   * @param {object} instance Braintree addOn instance
   */
  constructor(instance: any) {
    super(instance);
  }

  /**
   * Gets all of the addons from the braintree
   */
  public async all() {
    const addOnsCollection = await super.getInstance().all();
    return {success: true, addOns: addOnsCollection.addOns};
  }

  /**
   * Finds specific addon in the braintree addons
   * @param addonId Addon unique index (from braintree)
   */
  public async find(addonId: string) {
    const all = await this.all();
    const foundedAddon = _.find(all.addOns, (addOn: IAddOn) => addOn.id === addonId);
    if (foundedAddon) { return {success: true, addOn: foundedAddon as IAddOn}; }
    return {success: false, error: 'NotFound'};
  }

}
