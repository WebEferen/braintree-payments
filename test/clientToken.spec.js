'use strict';
const expect = require('chai').expect;
const config = require('./config');
const mockups = config.mockups;

const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments, config.currencies, 'EUR');
const ClientToken = Payments.getModule('clientToken');

describe('Client Token', () => {
  it('should be a module', () => {
    expect(ClientToken).to.be.an('object');
  });

  it('should NOT generate client token', async () => {
    const clientToken = await ClientToken.generateByCustomerId();
    expect(clientToken.success).to.be.false;
  });
  
  it('should generate client token without id', async () => {
    const clientToken = await ClientToken.generate();
    if (!clientToken.success) { return; }
    expect(clientToken.success).to.be.true;
    expect(clientToken.token).to.be.an('string');
  });

  it('should generate client token', async () => {
    const clientToken = await ClientToken.generateByCustomerId(mockups.testCustomer.id);
    if (!clientToken.success) { return; }
    expect(clientToken.success).to.be.true;
    expect(clientToken.token).to.be.an('string');
  });
});