'use strict';
const chai = require('chai');
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const braintreeConfig = require('./braintree.config');

const Payments = Braintree.Payments(braintreeConfig);
const Plan = Payments.getModule('plan');

const planId = 'bronzePlan';

describe('Plan', () => {

  it('should be a module', () => {
    expect(Plan).to.be.instanceof(Object);
  })

  it('should get all of the plans', (done) => {
    Plan.all().then((result) => {
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  });

  it('should NOT get specific plan', (done) => {
    Plan.find('someInvalidId').then(result => {
      expect(result.success).to.be.false;
      done();
    }).catch(e => { done(e); });
  });

  it('should get specific plan', (done) => {
    Plan.find(planId).then(result => {
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  })

});