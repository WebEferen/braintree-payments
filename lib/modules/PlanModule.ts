import * as _ from 'lodash';
import IPlan from '../interfaces/IPlan';

export default class PlanModule {

  private plan: any;

  /**
   * Constructor
   * @param {object} plan Braintree plan instance
   */
  constructor(plan: any) {
    this.plan = plan;
  }

  /**
   * Gets all of the plans from the braintree
   */
  public async all() {
    const plansCollection = await this.plan.all();
    return {success: true, plans: plansCollection};
  }

  /**
   * Finds specific plan in the braintree plans
   * @param planId Plan unique index (from braintree)
   */
  public async find(planId: string) {
    const all = await this.plan.all();
    const foundedPlan = _.find(all.plans, (plan: IPlan) => plan.id === planId);
    if (foundedPlan) { return {success: true, plan: foundedPlan as IPlan}; }
    return {success: false, error: 'NotFound'};
  }
}
