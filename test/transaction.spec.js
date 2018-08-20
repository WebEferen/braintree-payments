'use strict';
const chai = require('chai');
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig);
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
      if(result.error) { done(result.error); }
      validTransactionId = result.transaction.id;
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });
  it('should get braintree transaction', (done) => { 
    Transaction.find(validTransactionId).then(result => {
      if(result.error) { done(result.error); }
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });
  it('should refund braintree transaction', (done) => {
    Transaction.refund(validTransactionId, validTransactionUpdate).then(result => {
      if(result.error) { done(result.error); }
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });
  it('should cancel-release braintree transaction', (done) => {
    Transaction.cancelRelease(validTransactionId).then(result => {
      if(result.error) { done(result.error); }
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });
});