'use strict';
const config = require('./config');
const expect = require('chai').expect;
const Braintree = require('../dist/index.js');

describe('Braintree Environment', () => {
  it('should NOT get braintree environment', () => {
    const braintreeEnvironment = Braintree.getEnvironment('test');
    expect(braintreeEnvironment).to.be.null;
  });

  it('should get sandbox braintree environment', () => {
    const braintreeEnvironment = Braintree.getEnvironment('Sandbox');
    expect(braintreeEnvironment).to.be.an('object');
  });

  it('should get qa braintree environment', () => {
    const braintreeEnvironment = Braintree.getEnvironment('Qa');
    expect(braintreeEnvironment).to.be.an('object');
  });

  it('should get development braintree environment', () => {
    const braintreeEnvironment = Braintree.getEnvironment('Development');
    expect(braintreeEnvironment).to.be.an('object');
  });

  it('should get production braintree environment', () => {
    const braintreeEnvironment = Braintree.getEnvironment('Production');
    expect(braintreeEnvironment).to.be.an('object');
  });
});