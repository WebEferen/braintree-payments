import * as _ from 'lodash';
import Module from '../helpers/Module';
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
   */
  public async all() {
    const plansCollection = await super.getInstance().all();
    return {success: true, plans: plansCollection};
  }

  /**
   * Finds specific plan in the braintree plans
   * @param planId Plan unique index (from braintree)
   */
  public async find(planId: string) {
    const all = await super.getInstance().all();
    const foundedPlan = _.find(all.plans, (plan: IPlan) => plan.id === planId);
    if (foundedPlan) { return {success: true, plan: foundedPlan as IPlan}; }
    return {success: false, error: 'NotFound'};
  }
}
