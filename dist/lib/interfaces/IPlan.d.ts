export default interface IPlan {
    id: string;
    name: string;
    description: string;
    price: number;
    billingDayOfMonth: number;
    billingFrequency: string;
    numberOfBillingCycles: string;
    currencyIsoCode: string;
    trialDuration: string;
    trialDurationUnit: string;
    trialPeriod: string;
    discounts: object[];
    addOns: object[];
    createdAt: Date;
    updatedAt: Date;
}
