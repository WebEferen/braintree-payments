import * as _ from 'lodash';
import Module from '../abstracts/Module';
import IPlan from '../interfaces/IPlan';

export default class PlanModule extends Module {

  /**
   * Constructor
   * @param {object} instance Braintree plan instance
   */
  constructor(instance: any) { super(instance); }

  /**
   * Retrieve list of an plans from the Braintree vault
   */
  public async list() {
    await super.list();
    return {success: true, plans: super.getResult('plans')};
  }

  /**
   * Finds specific plan in the braintree plans
   * @param {string} planId Plan unique index (from braintree)
   */
  public async retrieve(planId: string) {
    const all = await this.list();
    const foundedPlan = _.find(all.plans, (plan: IPlan) => plan.id === planId);
    if (foundedPlan) { return {success: true, plan: foundedPlan as IPlan}; }
    return {success: false, error: 'NotFound'};
  }
}
