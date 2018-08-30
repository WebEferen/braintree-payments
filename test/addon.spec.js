'use strict';
const expect = require('chai').expect;
const config = require('./config');
const mockups = config.mockups;

const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments, config.currencies, 'EUR');
const AddOn = Payments.getModule('addOn');

describe('AddOn', () => {

  it('should be a module', () => {
    expect(AddOn).to.be.an('object');
  });

  it('should get all of the addons', async () => {
    const addons = await AddOn.all();
    if (!addons.success) { return; }
    expect(addons.success).to.be.true;
  });

  it('should NOT get addon', async () => {
    const addon = await AddOn.find(mockups.invalidAddonId);
    expect(addon.success).to.be.false;
    expect(addon.error).to.be.equal('NotFound');
  });

  it('should get an addon', async () => {
    const addon = await AddOn.find(mockups.addonId);
    if (!addon.success) { return; }
    expect(addon.success).to.be.true;
    expect(addon.addOn).to.be.an('object');
  });

});