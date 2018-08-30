export default interface IAddOn {
    id: string;
    kind: string;
    name: string;
    amount: string;
    quantity: number;
    neverExpires: boolean;
    currentBillingCycle: number;
    numberOfBillingCycles: number;
    description: string;
}
