'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const expect = chai.expect;

const payments = require('../dist').payments(config.payments);
const plans = payments.plans();

describe('Plans', () => {

  it('should get all of the plans', async() => {
    const result = await plans.list();
    expect(result.success).to.be.true;
    expect(result.plans.length).to.be.greaterThan(0);
  });

  it('should get specific plan', async() => {
    const result = await plans.retrieve(mockups.plan);
    expect(result.success).to.be.true;
    expect(result.plan.id).to.be.equal(mockups.plan);
  });

  it('should NOT get specific plan', async() => {
    const result = await plans.retrieve('invalidPlan');
    expect(result.success).to.be.false;
    expect(result.error).to.be.equal('NotFound');
  });

});