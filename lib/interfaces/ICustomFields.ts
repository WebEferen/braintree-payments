export default interface ICustomFields {
  clientId?: string;
  billingAddress?: {
    firstName: string;
    lastName: string;
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    countryName: string;
    countryCodeAlpha2: string;
    company: string;
  };
}
