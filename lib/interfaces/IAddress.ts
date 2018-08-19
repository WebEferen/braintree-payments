export default interface IAddress {
  id: string;
  company: string;
  firstName: string;
  lastName: string;
  customerId: string;
  locality: string;
  postalCode: string;
  streetAddress: string;
  countryName: string;
  countryCodeAlpha2: string;
  countryCodeAlpha3: string;
  countryCodeNumeric: string;
  extendedAddress: string;
  createdAt: Date;
  updatedAt: Date;
}
