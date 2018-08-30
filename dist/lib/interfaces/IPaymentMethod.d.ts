export default interface IPaymentMethod {
    customerId: string;
    paymentMethodNonce: string;
    token: string;
}
