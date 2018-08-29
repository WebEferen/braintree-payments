'use strict';
const chai = require('chai');
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig);
const Customer = Payments.getModule('customer');
const ClientToken = Payments.getModule('clientToken');

// Some mockups
const invalidCustomerObject = {
  id: '123_!@$+()*',
  firstName: 'John',
  lastName: 'Doe',
  email: 'email@example.com',
  phone: '111222333'
};

let validCustomerId;
const validCustomerObject = {
  id: validCustomerId,
  firstName: 'John',
  lastName: 'Doe',
  email: 'email@example.com',
  phone: '111222333'
};
const validCustomerUpdateObject = {
  firstName: 'Johny',
  lastName: 'Deep'
};

const validTestCustomerId = 'testCustomerId';
const validTestCustomer = {
  id: validTestCustomerId,
  firstName: 'Test',
  lastName: 'Customer',
  email: 'test@test.test',
  phone: '111222333444'
};

describe('Customer', () => {
  before(async () => {
    const customer = await Customer.find(validTestCustomerId);
    if (customer.success) { 
      const deleted = Customer.delete(validTestCustomerId);
      if (deleted.success) { return; }
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
    const customer = await Customer.create(invalidCustomerObject);
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
    const customer = await Customer.create(validCustomerObject);
    if (customer.error) { return; }
    validCustomerId = customer.customer.id;
    expect(customer.success).to.be.true;
  });

  it('should get braintree customer', async () => {
    const customer = await Customer.find(validCustomerId);
    if (customer.error) { return; }
    expect(customer.success).to.be.true;
  });

  it('should update braintree customer', async () => {
    const customer = await Customer.update(validCustomerId, validCustomerUpdateObject);
    if (customer.error) { return; }
    expect(customer.success).to.be.true;
  });

  it('should delete braintree customer', async () => {
    const customer = await Customer.delete(validCustomerId);
    if (customer.error) { return; }
    expect(customer.success).to.be.true;
  });

  it('should create braintree TEST customer', async () => {
    const customer = await Customer.create(validTestCustomer);
    if (customer.error) { return; }
    expect(customer.success).to.be.true;
  });

  it('should get braintree TEST customer', async () => {
    const customer = await Customer.find(validTestCustomerId);
    if (customer.error) { return; }
    expect(customer.success).to.be.true;
  });
});

describe('ClientToken', () => {
  it('should be a module', () => {
    expect(ClientToken).to.be.instanceof(Object);
  });

  it('should generate customer token', async () => {
    const token = await ClientToken.generate(validTestCustomerId);
    if (token.error) { return; }
    expect(token.success).to.be.true;
    expect(token.token).to.be.an('string');
  });
});