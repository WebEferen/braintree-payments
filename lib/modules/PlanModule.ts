import * as _ from 'lodash';
import Module from '../abstracts/Module';
import IPlan from '../interfaces/IPlan';

export default class PlanModule extends Module {

  /**
   * Constructor
   * @param {object} instance Braintree plan instance
   */
  constructor(instance: any) {
    super(instance);
  }

  /**
   * Gets all of the plans from the braintree
   * @returns {success: true, plans: IPlan}
   */
  public async all() {
    const plansCollection = await super.getInstance().all();
    return plansCollection;
  }

  /**
   * Finds specific plan in the braintree plans
   * @param planId Plan unique index (from braintree)
   */
  public async find(planId: string) {
    const all = await this.all();
    const foundedPlan = _.find(all.plans, (plan: IPlan) => plan.id === planId);
    if (foundedPlan) { return {success: true, plan: foundedPlan as IPlan}; }
    return {success: false, error: 'NotFound'};
  }
}
