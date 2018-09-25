import IAddOn from './IAddOn';
import ISubscriptionHistory from './ISubscriptionHistory';

export default interface ISubscription {
  id: string;
  name: string;
  price: number;
  status: string;
  planId: string;
  nextBillingPeriodAmount: string;
  statusHistory: ISubscriptionHistory[];
  numberOfBillingCycles: number;
  currentBillingCycle: number;
  paymentMethodToken: string;
  trialDurationUnit: string;
  merchantAccountId: string;
  nextBillAmount: string;
  nextBillingDate: Date;
  paidThroughDate: Date;
  neverExpires: boolean;
  totalPeriod: boolean;
  daysPastDue: Date;
  createdAt: Date;
  updatedAt: Date;
  addOns: IAddOn[];
}
