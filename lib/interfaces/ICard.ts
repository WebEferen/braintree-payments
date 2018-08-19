import IAddress from './IAddress';
import ISubscription from './ISubscription';

export default interface ICard {
  bin: string;
  debit: string;
  last4: string;
  token: string;
  payroll: string;
  prepaid: string;
  cardType: string;
  productId: string;
  customerId: string;
  commercial: string;
  maskedNumber: string;
  cardholderName: string;
  billingAddress: IAddress;
  customerLocation: string;
  countryOfIssuance: string;
  uniqueNumberIdentifier: string;
  durbinRegulated: string;
  expirationMonth: string;
  expirationDate: string;
  expirationYear: string;
  subscriptions: ISubscription[];
  verification: object[]; // TO MOVE INTO ICardVerification
  issuingBank: string;
  healthcare: string;
  imageUrl: string;
  expired: boolean;
  default: boolean;
  createdAt: Date;
  updatedAt: Date;
}
