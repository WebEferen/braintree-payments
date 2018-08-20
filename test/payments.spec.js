'use strict';
const expect = require('chai').expect;
const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config.js');

// Payments
const Payments = Braintree.Payments(braintreeConfig);
const connected = Payments.connect(braintreeConfig);
const paymentsConfig = Payments.getConfig();

describe('Payments', () => {
  it('should contain config object', () => {
    expect(paymentsConfig).to.be.instanceOf(Object);
  });
  it('should connect to the Braintree API', () => {
    expect(connected).to.be.true;
  });
  it('should NOT connect to the braintree API', () => {
    expect(Payments.connect()).to.throw;
  });
});

describe('Payments Config', () => {
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

describe('Payments Gateway', () => {
  it('should be an gateway object', () => {
    expect(Payments.getGateway()).to.be.instanceOf(Object);
  });
});