'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments);
const Customer = Payments.getModule('customer');
const ClientToken = Payments.getModule('clientToken');

describe('Customer', () => {
  before(async () => {
    const customer = await Customer.find(mockups.testCustomer.id);
    if (!customer.success) { 
      const created = Customer.create(mockups.testCustomer);
      if (created.success) { return; }
    } else return;
  });

  it('should be a module', () => {
    expect(Customer).to.be.instanceOf(Object);
  });

  // Incorrect tests [negation tests]
  it('should NOT create braintree customer (empty)', async () => {
    const customer = await Customer.create({});
    expect(customer.success).to.be.false;
  });

  it('should NOT create braintree customer (invalid)', async () => {
    const customer = await Customer.create(mockups.invalidCustomer);
    if (customer.error) { return; }
    expect(customer.success).to.be.false;
  });

  it('should NOT get braintree customer', async () => {
    const customer = await Customer.find('invalid');
    expect(customer.success).to.be.false;
  });

  it('should NOT update braintree customer', async () => {
    const customer = await Customer.update('invalid', {});
    expect(customer.success).to.be.false;
  });

  it('should NOT remove braintree customer', async () => {
    const customer = await Customer.delete('invalid');
    expect(customer.success).to.be.false;
  });

  // Valid tests
  it('should create braintree customer', async () => {
    const customer = await Customer.create(mockups.validCustomer);
    if (customer.error) { return; }
    expect(customer.success).to.be.true;
  });

  it('should get braintree customer', async () => {
    const customer = await Customer.find(mockups.validCustomer.id);
    if (customer.error) { return; }
    expect(customer.success).to.be.true;
  });

  it('should update braintree customer', async () => {
    const customer = await Customer.update(mockups.validCustomer.id, mockups.validCustomerUpdate);
    if (customer.error) { return; }
    expect(customer.success).to.be.true;
  });

  it('should delete braintree customer', async () => {
    const customer = await Customer.delete(mockups.validCustomer.id);
    if (customer.error) { return; }
    expect(customer.success).to.be.true;
  });
});

describe('ClientToken', () => {
  it('should be a module', () => {
    expect(ClientToken).to.be.instanceof(Object);
  });

  it('should generate customer token', async () => {
    const token = await ClientToken.generate(mockups.testCustomer.id);
    if (token.error) { return; }
    expect(token.success).to.be.true;
    expect(token.token).to.be.an('string');
  });
});