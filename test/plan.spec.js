'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments, config.currencies, 'EUR');
const Plan = Payments.getModule('plan');

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
    Plan.find(mockups.invalidPlanId).then(result => {
      expect(result.success).to.be.false;
      done();
    }).catch(e => { done(e); });
  });

  it('should get specific plan', (done) => {
    Plan.find(mockups.planId).then(result => {
      expect(result.success).to.be.true;
      done();
    }).catch(e => { done(e); });
  })

});