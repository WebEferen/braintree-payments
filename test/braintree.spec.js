'use strict';
const expect = require('chai').expect;
const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig);
const paymentsConfig = Payments.getConfig();
Payments.connect(braintreeConfig);

describe('Payments', () => {
  it('should contain config object', () => {
    expect(paymentsConfig).to.be.instanceOf(Object);
  });
  it('should NOT connect to the braintree API', () => {
    expect(Payments.connect()).to.throw;
  });
});

describe('Payments config', () => {
  it('should contain merchantId property', () => {
    expect(paymentsConfig).to.have.ownProperty('merchantId');
  });
  it('should contain publicKey property', () => {
    expect(paymentsConfig).to.have.ownProperty('publicKey');
  });
  it('should contain privateKey property', () => {
    expect(paymentsConfig).to.have.ownProperty('privateKey');
  });
  it('should contain environment property', () => {
    expect(paymentsConfig).to.have.ownProperty('environment');
  });
});