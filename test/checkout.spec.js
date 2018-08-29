'use strict';
const expect = require('chai').expect;
const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config.js');
const Checkout = Braintree.Checkout(braintreeConfig);

let clientToken;

describe('Checkout Simplifier', () => {
  
  it('should be an object', () => {
    expect(Checkout).to.be.an('object');
  });

  it('should generate client token', async () => {
    const token = await Checkout.generateClientToken();
    expect(token).to.be.an('object');
    expect(token.token).to.be.an('string');
    expect(token.success).to.be.true;
    clientToken = token.token;
  });

});