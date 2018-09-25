import IAddress from './IAddress';
import ICard from './ICard';
import ICustomFields from './ICustomFields';

export default interface ICustomer {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  addresses?: IAddress[];
  creditCards?: ICard[];
  customFields?: ICustomFields;
}
