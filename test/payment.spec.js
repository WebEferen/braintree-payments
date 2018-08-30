'use strict';
const expect = require('chai').expect;
const config = require('./config');
const mockups = config.mockups;

const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments, config.currencies, 'EUR');
const PaymentMethod = Payments.getModule('paymentMethod');
const PaymentMethodNonce = Payments.getModule('paymentMethodNonce');

describe('Payment Method', () => {

  it('should be a module', () => {
    expect(PaymentMethod).to.be.an('object');
  });

  it('should NOT find payment method', async () => {
    const paymentMethod = await PaymentMethod.find(mockups.invalidPaymentMethodToken);
    expect(paymentMethod.success).to.be.false;
  });

  it('should find payment method', async () => {
    const paymentMethod = await PaymentMethod.find(mockups.paymentMethodToken);
    if (!paymentMethod.success) { return; }
    expect(paymentMethod.success).to.be.true;
    expect(paymentMethod.paymentMethod).to.be.an('object');
  });

  it('should NOT create payment method nonce', async () => {
    const paymentMethodNonce = await PaymentMethodNonce.create(mockups.invalidPaymentMethodToken);
    expect(paymentMethodNonce.success).to.be.false;
  });

  it('should create payment method nonce', async () => {
    const paymentMethodNonce = await PaymentMethodNonce.create(mockups.paymentMethodToken);
    if (!paymentMethodNonce.success) { return; }
    expect(paymentMethodNonce.success).to.be.true;
  });

});