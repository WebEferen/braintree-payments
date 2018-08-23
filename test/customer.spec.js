'use strict';
const chai = require('chai');
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig);
const Customer = Payments.getModule('customer');

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
  before((done) => {
    Customer.find(validTestCustomerId).then(result => {
      if (result.success) {
        Customer.delete(validTestCustomerId).then(() => {
          done();
        });
      } else {
        done();
      }
    });
  });

  it('should be a module', () => {
    expect(Customer).to.be.instanceOf(Object);
  });

  // Incorrect tests [negation tests]
  it('should NOT create braintree customer (empty)', (done) => {
    Customer.create({}).then((result) => {
      expect(result.success).to.be.false;
      done();
    }).catch(e => { done(e); });
  });
  it('should NOT get braintree customer', (done) => {
    Customer.find('invalidCustomerId').then(result => {
      expect(result.success).to.be.false;
      done();
    }).catch(e => { done(e); });
  });
  it('should NOT update braintree customer', (done) => {
    Customer.update('invalidCustomerId', {}).then(result => {
      expect(result.success).to.be.false;
      done();
    }).catch(e => { done(e); });
  });
  it('should NOT remove braintree customer', (done) => {
    Customer.delete('invalidCustomerId').then(result => {
      expect(result.success).to.be.false;
      done();
    }).catch(e => { done(e); });
  });

  // Valid tests
  it('should create braintree customer', (done) => {
    Customer.create(validCustomerObject).then(result => {
      if(result.error) { done(result.error); }
      validCustomerId = result.customer.id;
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });

  it('should get braintree customer', (done) => {
    Customer.find(validCustomerId).then(result => {
      if(result.error) { done(result.error); }
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });

  it('should update braintree customer', (done) => {
    Customer.update(validCustomerId, validCustomerUpdateObject).then(result => {
      if(result.error) { done(result.error); }
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });

  it('should delete braintree customer', (done) => {
    Customer.delete(validCustomerId).then(result => {
      if(result.error) { done(result.error); }
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });

  it('should create braintree TEST customer', (done) => {
    Customer.create(validTestCustomer).then(result => {
      if(result.error) { done(result.error); }
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });

  it('should get braintree TEST customer', (done) => {
    Customer.find(validTestCustomerId).then(result => {
      if(result.error) { done(result.error); }
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });
});