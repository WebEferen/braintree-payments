'use strict';
const chai = require('chai');
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig, true);
const Customer = Payments.getModule('customer');

// Some mockups
const validCustomerId = 'validCustomerId';
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
  before((done) => {
    Customer.find(validTestCustomerId).then(result => {
      if (result.success) {
        Customer.delete(validTestCustomerId).then(result => {
          done();
        })
      }
    });
  });

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
  it('should NOT update braintree customer', () => {
    Customer.update('invalidCustomerId', {}).then(result => {
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
  it('should update braintree customer', (done) => {
    Customer.update(validCustomerId, validCustomerUpdateObject).then(result => {
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
  it('should create braintree TEST customer', (done) => {
    Customer.create(validTestCustomer).then(result => {
      done();
      expect(result.success).to.be.true;
    });
  });
  it('should get braintree TEST customer', (done) => {
    Customer.find(validTestCustomerId).then(result => {
      done();
      expect(result.success).to.be.true;
    });
  });
});