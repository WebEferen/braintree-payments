'use strict';
const chai = require('chai');
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig);
const Subscription = Payments.getModule('subscription');
// Subscription = new Subscription(Payments.getGateway('subscription'));

// Some mockups
const validSubscriptionId = 'someDuplicatedId';
const duplicatedSubscriptionId = validSubscriptionId;

const invalidSubscriptionObject = {
  id: duplicatedSubscriptionId,
  paymentMethodNonce: 'fake-valid-visa-nonce',
  planId: 'bronzePlan'
};

const validSubscriptionObject = {
  id: validSubscriptionId,
  paymentMethodNonce: 'fake-valid-visa-nonce',
  planId: 'bronzePlan'
};

describe('Subscription', () => {

  it('should be a module', () => {
    expect(Subscription).to.be.instanceof(Object);
  });

  it('should NOT create subscription (empty)', (done) => {
    Subscription.create({}).then(result => {
      expect(result.success).to.be.false;
      done();
    }).catch(e => { done(e); });
  });

  // it('should create subscription', (done) => {
  //   Subscription.create(validSubscriptionObject).then(result => {
  //     console.log(result);
  //     expect(result.success).to.be.true;
  //     done();
  //   }).catch(e => { done(e); });
  // });

  it('should NOT create subscription (duplicated)', (done) => {
    Subscription.create(invalidSubscriptionObject).then(result => {
      expect(result.success).to.be.false;
      done();
    }).catch(e => { done(e); });
  });

});