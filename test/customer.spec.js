'use strict';
const chai = require('chai');
const should = chai.should;
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig, true);
const Customer = Payments.getModule('customer');

// Some mockups
const validCustomerId = "validCustomerId";
const validCustomerObject = {
  id: validCustomerId,
  firstName: 'John',
  lastName: 'Doe',
  email: 'email@example.com',
  phone: '111222333'
};

describe('Customer', () => {
  it('should be a module', () => {
    expect(Customer).to.be.instanceOf(Object);
  });

  // Incorrect tests [negation tests]
  it('should NOT create braintree customer', () => {
    Customer.create({}).then((result) => {
      expect(result.success).to.be.false;
    });
  });
  it('should NOT get braintree customer', () => {
    Customer.find('invalidCustomerId').then(result => {
      expect(result.success).to.be.false;
    });
  });
  it('should NOT remove braintree customer', () => {
    Customer.delete('invalidCustomerId').then(result => {
      expect(result.success).to.be.false;
    });
  });

  // Valid tests
  it('should create braintree customer', (done) => {
    Customer.create(validCustomerObject).then(result => {
      done();
      expect(result.success).to.be.true;
    });
  });
  it('should get braintree customer', (done) => {
    Customer.find(validCustomerId).then(result => {
      done();
      expect(result.success).to.be.true;
    });
  });
  it('should delete braintree customer', (done) => {
    Customer.delete(validCustomerId).then(result => {
      done();
      expect(result.success).to.be.true;
    });
  });
});