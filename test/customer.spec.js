'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const expect = chai.expect;

const payments = require('../dist').payments(config.payments);
const customers = payments.customers();
const tokens = payments.tokens();

const customer = {id: ''};

describe('Customer', () => {

  // Incorrect tests [negation tests]
  it('should NOT create braintree customer (empty)', async () => {
    const result = await customers.create({});
    expect(result.success).to.be.false;
  });

  it('should NOT create braintree customer (invalid)', async () => {
    const result = await customers.create(mockups.customer.invalid);
    expect(result.success).to.be.false;
  });

  it('should NOT get braintree customer', async () => {
    const result = await customers.retrieve('invalid');
    expect(result.success).to.be.false;
  });

  it('should NOT update braintree customer', async () => {
    const result = await customers.update('invalid', {});
    expect(result.success).to.be.false;
  });

  it('should NOT remove braintree customer', async () => {
    const result = await customers.delete('invalid');
    expect(result.success).to.be.false;
  });

  // Valid tests
  it('should create braintree customer', async () => {
    const result = await customers.create(mockups.customer.valid);
    expect(result.success).to.be.true;
    customer.id = result.customer.id;
  });

  it('should get braintree customer', async () => {
    const result = await customers.retrieve(customer.id);
    expect(result.success).to.be.true;
  });

  it('should generate customer token', async () => {
    const result = await tokens.generate(customer.id);
    if (result.error) { return; }
    expect(result.success).to.be.true;
    expect(result.token).to.be.an('string');
  });

  it('should update braintree customer', async () => {
    const update = {firstName: 'Test', lastName: 'Test2'};
    const result = await customers.update(customer.id, update);
    expect(result.success).to.be.true;
  });

  it('should delete braintree customer', async () => {
    const result = await customers.delete(customer.id);
    expect(result.success).to.be.true;
  });
});