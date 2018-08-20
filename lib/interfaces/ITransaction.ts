import IAddOn from './IAddOn';

export default interface ITransaction {
  id: string;
  bin: string;
  amount: string;
  additionalProcessorResponse: string;
  androidPayCard: any;
  applePayCard: any;
  creditCard: any;
  masterpassCardDetails: any;
  paypalAccount: any;
  currencyIsoCode: string;
  customFields: object[];
  merchantAccountId: string;
  orderId: string;
  planId: string;
  paymentInstrumentType: string;
  processorAuthorizationCode: string;
  processorResponseCode: string;
  processorResponseText: string;
  processorSettlementResponseCode: string;
  processorSettlementResponseText: string;
  purchaseOrderNumber: string;
  recurring: string;
  refundIds: string;
  refundedTransactionId: string;
  serviceFeeAmount: string;
  settlementBatchId: string;
  shippingAmount: string;
  shipping: any;
  shipsFromPostalCode: string;
  status: string;
  statusHistory: string;
  subscription: any;
  subscriptionId: string;
  taxAmount: string;
  taxExempt: boolean;
  threeDSecureInfo: any;
  type: string;
  venmoAccount: any;
  visaCheckoutCardDetails: any;
  voiceReferralNumber: number;
  riskData: any;
  customer: any;
  cvvResponseCode: string;
  descriptor: any;
  disbursementDetails: any;
  discountAmount: string;
  discounts: object[];
  disputes: object[];
  escrowStatus: string;
  facilitatedDetails: any;
  facilitatorDetails: any;
  gatewayRejectionReason: string;
  lineItems: object[];
  authorizationAdjustments: object[];
  avsErrorResponseCode: string;
  avsPostalCodeResponseCode: string;
  avsStreetAddressResponseCode: string;
  billing: any;
  channel: string;
  addOns: IAddOn[];
  createdAt: Date;
  updatedAt: Date;
}