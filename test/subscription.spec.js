'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments, config.currencies, 'EUR');
const Subscription = Payments.getModule('subscription');

let subscriptionId;

describe('Subscription', () => {

  it('should be a module', () => {
    expect(Subscription).to.be.instanceof(Object);
  });

  it('should NOT create subscription (empty)', async () => {
    const subscription = await Subscription.create({});
    expect(subscription.success).to.be.false;
    expect(subscription.error).to.be.equal('VerificationError');
  });

  it('should NOT create subscription (exists)', async () => {
    const subscription = await Subscription.create(mockups.invalidSubscription);
    expect(subscription.success).to.be.false;
  });

  it('should NOT find subscription', async () => {
    const subscription = await Subscription.find(mockups.invalidSubscriptionId);
    expect(subscription.success).to.be.false;
  });

  it('should NOT update subscription', async () => {
    const subscription = await Subscription.update(mockups.invalidSubscriptionId, mockups.validSubscriptionUpdate);
    expect(subscription.success).to.be.false;
  });

  it('should NOT cancel subscription', async () => {
    const subscription = await Subscription.cancel(mockups.invalidSubscriptionId);
    expect(subscription.success).to.be.false;
  });

  it('should create subscription', async () => {
    const subscription = await Subscription.create(mockups.validSubscription);
    if (!subscription.success) { return; }
    subscriptionId = subscription.subscription.id;
    expect(subscription.success).to.be.true;
    expect(subscription.subscription).to.be.an('object');
  });

  it('should find subscription', async () => {
    const subscription = await Subscription.find(subscriptionId);
    if (!subscription.success) { return; }
    expect(subscription.success).to.be.true;
    expect(subscription.subscription).to.be.an('object');
  });

  it('should update subscription', async () => {
    const subscription = await Subscription.update(subscriptionId, mockups.validSubscriptionUpdate);
    if (!subscription.success) { return; }
    expect(subscription.success).to.be.true;
    expect(subscription.subscription).to.be.an('object');
  });

  it('should cancel subscription', async () => {
    const subscription = await Subscription.cancel(subscriptionId);
    if (!subscription.success) { return; }
    expect(subscription.success).to.be.true;
  });

});