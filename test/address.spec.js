'use strict';
const expect = require('chai').expect;
const config = require('./config');
const mockups = config.mockups;

const Braintree = require('../dist/index.js');
const Payments = Braintree.Payments(config.payments, config.currencies, 'EUR');
const Address = Payments.getModule('address');

let addressId;

describe('Address', () => {

  it('should be a module', () => {
    expect(Address).to.be.an('object');
  });

  it('should NOT create an address', async () => {
    const address = await Address.create(mockups.testCustomer.id, {});
    expect(address.success).to.be.false;
  });

  it('should NOT find address', async () => {
    const address = await Address.find(mockups.testCustomer.id, 'invalidAddressId');
    expect(address.success).to.be.false;
  });

  it('should NOT update address', async () => {
    const address = await Address.update(mockups.testCustomer.id, 'invalidAddressId', mockups.validAddress);
    expect(address.success).to.be.false;
  });

  it('should NOT delete address', async () => {
    const address = await Address.delete(mockups.testCustomer.id, 'invalidAddressId');
    expect(address.success).to.be.false;
  });

  it('should create an address', async () => { 
    const address = await Address.create(mockups.testCustomer.id, mockups.validAddress);
    addressId = address.address.id;
    expect(address.success).to.be.true;
    expect(address.address).to.be.an('object');
  });

  it('should find an address', async () => {
    const address = await Address.find(mockups.testCustomer.id, addressId);
    expect(address.success).to.be.true;
  });

  it('should update an address', async () => {
    const address = await Address.update(mockups.testCustomer.id, addressId, mockups.validAddress);
    expect(address.success).to.be.true;
  });

  it('should delete an address', async () => {
    const address = await Address.delete(mockups.testCustomer.id, addressId);
    expect(address.success).to.be.true;
  });
});