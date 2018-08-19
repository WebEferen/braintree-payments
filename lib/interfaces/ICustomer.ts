import IAddress from './IAddress';
import ICard from './ICard';

export default interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  website: string;
  email: string;
  phone: string;
  fax: string;
  addresses: IAddress[];
  creditCards: ICard[];
  customFields: object[];
  venmoAccounts: object[];
  applePayCards: object[];
  paymentMethods: object[];
  paypalAccounts: object[];
  masterpassCards: object[];
  androidPayCards: object[];
  visaCheckoutCards: object[];
  createdAt: Date;
  updatedAt: Date;
}
