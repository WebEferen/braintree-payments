'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const expect = chai.expect;

const payments = require('../dist').payments(config.payments);
const customers = payments.customers();
const subscriptions = payments.subscriptions();

const customer = {id: '', card: {token: ''}};
const subscription = {id: ''};

describe('Subscription', () => {

  it('should create braintree customer', async () => {
    const result = await customers.create(mockups.customer.valid);
    expect(result.success).to.be.true;
    customer.id = result.customer.id;
  });

  it('should attach card', async() => {
    const result = await customers.attachCard(customer.id, mockups.card.valid.paymentMethodNonce);
    expect(result.success).to.be.true;
    expect(result.card.cardType).to.be.equal('Visa');
    customer.card.token = result.card.token;
  });

  it('should NOT create subscription', async() => {
    const createObject = {planId: mockups.subscription.invalid.planId};
    const result = await subscriptions.create(createObject);
    expect(result.success).to.be.false;
  });

  it('should NOT retrieve subscription', async() => {
    const result = await subscriptions.retrieve('invalidSubscriptionId');
    expect(result.success).to.be.false;
  });

  it('should NOT update subscription', async() => {
    const updatedObject = {planId: mockups.subscription.valid.planId};
    const result = await subscriptions.update('invalidSubscriptionId', updatedObject);
    expect(result.success).to.be.false;
  });

  it('should NOT cancel subscription', async() => {
    const result = await subscriptions.delete('invalidSubscriptionId');
    expect(result.success).to.be.false;
  });

  it('should create subscription', async() => {
    const createObject = {planId: mockups.subscription.valid.planId};
    createObject.paymentMethodToken = customer.card.token;

    const result = await subscriptions.create(createObject);
    subscription.id = result.subscription.id;
    expect(result.success).to.be.true;
    expect(result.subscription.id).to.be.an('string');
  });

  it('should retrieve subscription', async() => {
    const result = await subscriptions.retrieve(subscription.id);
    expect(result.success).to.be.true;
    expect(result.subscription.id).to.be.equal(subscription.id);
  });

  it('should update subscription', async() => {
    const updatedObject = {price: '100.00'};
    const result = await subscriptions.update(subscription.id, updatedObject);
    expect(result.success).to.be.true;
    expect(result.subscription.price).to.be.equal('100.00');
    expect(result.subscription.id).to.be.equal(subscription.id);
  });

  it('should cancel subscription', async() => {
    const result = await subscriptions.delete(subscription.id);
    expect(result.success).to.be.true;
    expect(result.subscription.deleted).to.be.true;
  });

  it('should delete braintree customer', async () => {
    const result = await customers.delete(customer.id);
    expect(result.success).to.be.true;
    expect(result.customer.deleted).to.be.true;
  });

});
