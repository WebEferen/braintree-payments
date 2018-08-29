'use strict';
const expect = require('chai').expect;
const Braintree = require('../dist/index.js');

const config = require('./config.js');
const mockups = config.mockups;

const Checkout = Braintree.Checkout(config.payments);

describe('Checkout Simplifier', () => {
  
  it('should be an object', () => {
    expect(Checkout).to.be.an('object');
  });

  it('should generate client token', async () => {
    const token = await Checkout.generateClientToken();
    expect(token.token).to.be.an('string');
    expect(token.success).to.be.true;
  });

  it('should generate client token with customerId', async () => {
    const token = await Checkout.generateClientTokenById(mockups.testCustomer.id);
    expect(token.token).to.be.an('string');
    expect(token.success).to.be.true;
  });

});