'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments, config.currencies, 'EUR');
const Transaction = Payments.getModule('transaction');

let validTransactionId;

describe('Transaction', () => {

  it('should be a module', () => {
    expect(Transaction).to.be.instanceof(Object);
  });

  // Invalid
  it('should NOT sale braintree transaction', () => {
    Transaction.sale({}).then(result => {
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
  it('should sale braintree transaction', (done) => { 
    Transaction.sale(mockups.validTransaction).then(result => {
      validTransactionId = result.transaction.id;
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });
  it('should get braintree transaction', (done) => { 
    Transaction.find(validTransactionId).then(result => {
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });
  it('should refund braintree transaction', (done) => {
    Transaction.refund(validTransactionId, mockups.validTransactionUpdate).then(result => {
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });
  it('should cancel-release braintree transaction', (done) => {
    Transaction.cancelRelease(validTransactionId).then(result => {
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });
});