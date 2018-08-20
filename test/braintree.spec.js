'use strict';
const expect = require('chai').expect;
const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config.js');
const Payments = Braintree.Payments(braintreeConfig);

describe('Modules', () => {
  it('should contain customer module', (done) => {
    expect(Payments.getModule('customer')).to.be.instanceof(Object);
    done();
  });
  // it('should contain subscription module', (done) => {
  //   expect(Payments.getModule('subscription')).to.be.instanceof(Object);
  //   done();
  // });
  it('should contain transaction module', (done) => {
    expect(Payments.getModule('transaction')).to.be.instanceof(Object);
    done();
  });
  // it('should contain plan module', (done) => {
  //   expect(Payments.getModule('plan')).to.be.instanceof(Object);
  //   done();
  // });
  it('should return undefined', (done) => {
    expect(Payments.getModule('SomeModule')).to.be.undefined;
    done();
  });
});

describe('Payments Config', () => {
  it('should contain merchantId property', () => {
    expect(Payments.getConfig('merchantId')).to.be.equal(braintreeConfig.merchantId);
  });
  it('should contain publicKey property', () => {
    expect(Payments.getConfig('publicKey')).to.be.equal(braintreeConfig.publicKey);
  });
  it('should contain privateKey property', () => {
    expect(Payments.getConfig('privateKey')).to.be.equal(braintreeConfig.privateKey);
  });
  it('should contain environment property', () => {
    expect(Payments.getConfig('environment')).to.be.equal(braintreeConfig.environment);
  });
  it('should get all of the keys', () => {
    expect(Payments.getConfig('*')).to.be.equal(braintreeConfig);
  });
});