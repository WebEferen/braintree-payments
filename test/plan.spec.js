'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const currencies = config.currencies;
const expect = chai.expect;

const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments, config.currencies, 'EUR');
const Plan = Payments.getModule('plan');

describe('Plan', () => {

  it('should be a module', () => {
    expect(Plan).to.be.instanceof(Object);
  })

  it('should get all of the plans', async() => {
    const result = await Plan.all();
    expect(result.success).to.be.true;
  });

  it('should NOT get specific plan (by Id)', async() => {
    const result = await Plan.findOneById('INVALID_ID');
    expect(result.success).to.be.false;
  });

  it('should NOT get specific plans (by currency)', async() => {
    const result = await Plan.findAllByCurrency('INVALID_CURRENCY');
    expect(result.success).to.be.false;
  });

  it('should NOT get specific plan (by currency and id)', async() => {
    const result = await Plan.findOneByCurrency('INVALID_CURRENCY', 'INVALID_ID');
    expect(result.success).to.be.false;
  });

  it('should NOT get specific plan (by search object)', async() => {
    const result = await Plan.find({id: 'INVALID_ID'});
    expect(result.success).to.be.false;
  });

  it('should get specific plan (by Id)', async() => {
    const result = await Plan.findOneById(mockups.planId);
    expect(result.success).to.be.true;
  });

  it('should get specific plans (by currency)', async() => {
    const result = await Plan.findAllByCurrency(currencies[0].currency);
    expect(result.success).to.be.true;
  });

  it('should get specific plan (by currency and id)', async() => {
    const result = await Plan.findOneByCurrency(currencies[0].currency, mockups.planId);
    expect(result.success).to.be.true;
  });

  it('should get specific plan (by search object)', async() => {
    const result = await Plan.find({currencyIsoCode: currencies[0].currency});
    expect(result.success).to.be.true;
  });

});