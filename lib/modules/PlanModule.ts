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
   * Finds specific plans by the search object from the braintree plans
   * @param {object} search Search object
   */
  public async find(search: object) {
    const all = await this.all();
    const plans = _.filter(all.plans, search);
    if (plans.length > 0) { return {success: true, plans}; }
    return {success: false, error: 'NotFound'};
  }

  /**
   * Finds specific plan by the search object from the braintree plans
   * @param {object} search Search object
   */
  public async findOne(search: object) {
    const all = await this.all();
    const plan = _.find(all.plans, search);
    if (plan) { return {success: true, plan}; }
    return {success: false, error: 'NotFound'};
  }

  /**
   * Finds specific plan in the braintree plans
   * @param {string} planId Plan unique index (from braintree)
   */
  public async findOneById(planId: string) {
    const all = await this.all();
    const plan = _.find(all.plans, (p: IPlan) => p.id === planId);
    if (plan) { return {success: true, plan}; }
    return {success: false, error: 'NotFound'};
  }

  /**
   * Finds all plans for the specific currencies
   * @param {string} currency Currency string value
   */
  public async findAllByCurrency(currency: string) {
    const all = await this.all();
    const plans = _.filter(all.plans, (plan: IPlan) => plan.currencyIsoCode === currency);
    if (plans.length > 0) { return {success: true, plans}; }
    return {success: false, error: 'NotFound'};
  }

  /**
   * Finds plan for the specific currency and id
   * @param {string} currency Currency string value
   * @param {string} planId Plan unique index
   */
  public async findOneByCurrency(currency: string, planId: string) {
    const all = await this.all();
    const plan = _.find(all.plans, (p: IPlan) => p.currencyIsoCode === currency && p.id === planId);
    if (plan) { return {success: true, plan}; }
    return {success: false, error: 'NotFound'};
  }
}
