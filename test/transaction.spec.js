'use strict';
const chai = require('chai');
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig, true);
const Transaction = Payments.getModule('transaction');

// Mockups
let validTransactionId;
const validTestCustomerId = 'testCustomerId';
const validTransactionObject = {
  customerId: validTestCustomerId,
  amount: 99.00,
  paymentMethodNonce: 'fake-valid-nonce'
};
const validTransactionUpdate = {
  amount: 100.00
};


describe('Transaction', () => {

  it('should be a module', () => {
    expect(Transaction).to.be.instanceof(Object);
  });

  // Invalid
  it('should NOT create braintree transaction', () => {
    Transaction.create({}).then(result => {
      expect(result.success).to.be.false;
    });
  });
  it('should NOT get braintree transaction', () => {
    Transaction.find('someInvalidId').then(result => {
      expect(result.success).to.be.false;
    });
  });
  it('should NOT update braintree transaction', () => {
    Transaction.refund('someInvalidId', {}).then(result => {
      expect(result.success).to.be.false;
    });
  });
  it('should NOT cancel-release braintree transaction', () => {
    Transaction.cancelRelease('someInvalidId').then(result => {
      expect(result.success).to.be.false;
    });
  });

  // Valid
  it('should create braintree transaction', (done) => { 
    Transaction.create(validTransactionObject).then(result => {
      validTransactionId = result.transaction.id;
      done();
      expect(result.success).to.be.true;
    });
  });
  it('should get braintree transaction', (done) => { 
    Transaction.find(validTransactionId).then(result => {
      done();
      expect(result.success).to.be.true;
    });
  });
  it('should refund braintree transaction', (done) => {
    Transaction.refund(validTransactionId, validTransactionUpdate).then(result => {
      done();
      expect(result.success).to.be.true;
    });
  });
  it('should cancel-release braintree transaction', (done) => {
    Transaction.cancelRelease(validTransactionId).then(result => {
      done();
      expect(result.success).to.be.true;
    });
  });
});