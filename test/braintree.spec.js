'use strict';

const config = require('./config.js');
const expect = require('chai').expect;
const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments, config.currencies, 'EUR');

describe('Payments Method', () => {
  it('should NOT set Payments module', () => {
    const payments = Braintree.Payments(config.payments);
    expect(payments).to.throw;
  });
  it('should set Payments module (EUR)', () => {
    const payments = Braintree.Payments(config.payments, config.currencies, 'EUR');
    expect(payments).to.be.an('object');
  });
});

describe('Modules', () => {
  it('should contain customer module', (done) => {
    expect(Payments.getModule('customer')).to.be.instanceof(Object);
    done();
  });
  it('should contain subscription module', (done) => {
    expect(Payments.getModule('subscription')).to.be.instanceof(Object);
    done();
  });
  it('should contain transaction module', (done) => {
    expect(Payments.getModule('transaction')).to.be.instanceof(Object);
    done();
  });
  it('should contain plan module', (done) => {
    expect(Payments.getModule('plan')).to.be.instanceof(Object);
    done();
  });
  it('should return undefined', (done) => {
    expect(Payments.getModule('SomeModule')).to.be.undefined;
    done();
  });
});

describe('Gateway', () => {
  it('should get gateway object', () => {
    expect(Payments.getGateway()).to.be.instanceof(Object);
  });
  it('should get single gateway instance', () => {
    expect(Payments.getGateway('customer')).to.be.instanceof(Object);
  });
  it('should NOT get single gateway instance', () => {
    expect(Payments.getGateway('someInvalid')).to.be.undefined;
  });
});

describe('Payments Config', () => {
  it('should contain merchantId property', () => {
    expect(Payments.getConfig('merchantId')).to.be.equal(config.payments.merchantId);
  });
  it('should contain publicKey property', () => {
    expect(Payments.getConfig('publicKey')).to.be.equal(config.payments.publicKey);
  });
  it('should contain privateKey property', () => {
    expect(Payments.getConfig('privateKey')).to.be.equal(config.payments.privateKey);
  });
  it('should contain environment property', () => {
    expect(Payments.getConfig('environment')).to.be.equal(config.payments.environment);
  });
  it('should get all of the keys', () => {
    expect(Payments.getConfig('*')).to.be.equal(config.payments);
  });
});