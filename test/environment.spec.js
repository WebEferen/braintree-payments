'use strict';
const expect = require('chai').expect;
const Braintree = require('../dist/index.js');

describe('Braintree Environment', () => {
  it('should NOT get braintree environment', () => {
    const braintreeEnvironment = Braintree.Environment('test');
    expect(braintreeEnvironment).to.be.null;
  });

  it('should get sandbox braintree environment', () => {
    const braintreeEnvironment = Braintree.Environment('Sandbox');
    expect(braintreeEnvironment).to.be.an('object');
  });

  it('should get qa braintree environment', () => {
    const braintreeEnvironment = Braintree.Environment('Qa');
    expect(braintreeEnvironment).to.be.an('object');
  });

  it('should get development braintree environment', () => {
    const braintreeEnvironment = Braintree.Environment('Development');
    expect(braintreeEnvironment).to.be.an('object');
  });

  it('should get production braintree environment', () => {
    const braintreeEnvironment = Braintree.Environment('Production');
    expect(braintreeEnvironment).to.be.an('object');
  });
});