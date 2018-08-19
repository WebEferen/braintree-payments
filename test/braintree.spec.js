'use strict';
const expect = require('chai').expect;
const index = require('../dist/index.js');

const braintreeConfig = {
  merchantId: 'TestMerchantId',
  publicKey: 'publicKey',
  privateKey: 'privateKey',
  environment: 'SandboxEnvironment'
};

const Payments = index.Payments(braintreeConfig);

describe('Payments', () => {
  it('should return gateway object', () => {
    const result = index.Payments();
    expect(result).to.be.instanceof(Object);
  });
});

describe('Gateway', () => {
  it('should contain config object', () => {
    const config = Payments.getConfig();
    expect(config).to.be.instanceOf(Object);
  });
});

describe('Gateway config', () => {
  it('should contain merchantId property', () => {
    const config = Payments.getConfig();
    expect(config).to.have.ownProperty('merchantId');
  });
  it('should contain publicKey property', () => {
    const config = Payments.getConfig();
    expect(config).to.have.ownProperty('publicKey');
  });
  it('should contain privateKey property', () => {
    const config = Payments.getConfig();
    expect(config).to.have.ownProperty('privateKey');
  });
  it('should contain environment property', () => {
    const config = Payments.getConfig();
    expect(config).to.have.ownProperty('environment');
  });
});