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
   * Retrieve list of an addons from the Braintree vault
   */
  public async list() {
    await super.list();
    return {success: true, addons: super.getResult('addOns')};
  }

  /**
   * Finds specific addon in the braintree addons
   * @param {string} addonId Addon unique index (from braintree)
   */
  public async retrieve(addonId: string) {
    const all = await this.list();
    const foundedAddon = _.find(all.addons, (addon: IAddOn) => addon.id === addonId);
    if (foundedAddon) { return {success: true, addon: foundedAddon as IAddOn}; }
    return {success: false, error: 'NotFound'};
  }

}
