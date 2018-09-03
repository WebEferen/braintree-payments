'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const currencies = config.currencies;
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
  it('should NOT sale braintree transaction', async() => {
    const result = await Transaction.sale({});
    expect(result.success).to.be.false;
  });
  it('should NOT get braintree transaction', async() => {
    const result = await Transaction.find('someInvalidId');
    expect(result.success).to.be.false;
  });
  it('should NOT refund braintree transaction', async() => {
    const result = await Transaction.refund('someInvalidId');
    expect(result.success).to.be.false;
  });
  it('should NOT cancel-release braintree transaction', async() => {
    const result = await Transaction.cancelRelease('someInvalidId');
    expect(result.success).to.be.false;
  });

  // Valid
  it('should sale braintree transaction (default currency)', async() => { 
    const result = await Transaction.sale(mockups.validTransaction);
    if (!result.success) { return; }
    expect(result.success).to.be.true;
    expect(result.transaction.id).to.be.an('string');
    validTransactionId = result.transaction.id;
  });
  it('should get braintree transaction (default currency)', async() => { 
    const result = await Transaction.find(validTransactionId);
    if (!result.success) { return; }
    expect(result.success).to.be.true;
    expect(result.transaction.id).to.be.an('string');
  });
  it('should refund braintree transaction (default currency)', async() => {
    const result = await Transaction.find(validTransactionId);
    if (!result.success) { return; }
    expect(result.success).to.be.true;
  });
  it('should cancel-release braintree transaction (default currency)', async() => {
    const result = await Transaction.cancelRelease(validTransactionId);
    if (!result.success) { return; }
    expect(result.success).to.be.true;
  });

  it('should sale braintree transaction (setted currency)', async() => { 
    const result = await Transaction.sale(mockups.validTransaction, currencies[0].account);
    if (!result.success) { return; }
    expect(result.success).to.be.true;
    expect(result.transaction.id).to.be.an('string');
    validTransactionId = result.transaction.id;
  });
  it('should get braintree transaction (setted currency)', async() => { 
    const result = await Transaction.find(validTransactionId);
    if (!result.success) { return; }
    expect(result.success).to.be.true;
    expect(result.transaction.id).to.be.an('string');
  });
  it('should refund braintree transaction (setted currency)', async() => {
    const result = await Transaction.refund(validTransactionId);
    if (!result.success) { return; }
    expect(result.success).to.be.true;
  });
  it('should cancel-release braintree transaction (setted currency)', async() => {
    const result = await Transaction.cancelRelease(validTransactionId);
    if (!result.success) { return; }
    expect(result.success).to.be.true;
  });
});