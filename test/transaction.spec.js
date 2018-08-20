'use strict';
const chai = require('chai');
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig, true);
const Transaction = Payments.getModule('transaction');

describe('Transaction', () => {

  it('should be a module', () => {
    expect(Transaction).to.be.instanceof(Object);
  });

  // Invalid
  it('should NOT create braintree transaction', () => {});
  it('should NOT get braintree transaction', () => {});
  it('should NOT update braintree transaction', () => {});
  it('should NOT delete braintree transaction', () => {});

  // Valid
  it('should create braintree transaction', (done) => { done(); });
  it('should get braintree transaction', (done) => { done(); });
  it('should update braintree transaction', (done) => { done(); });
  it('should delete braintree transaction', (done) => { done(); });
});