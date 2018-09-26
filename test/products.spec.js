'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const expect = chai.expect;

const payments = require('../dist').payments(config.payments);
const products = payments.products();

describe('Products (addons)', () => {

  it('should get all of the products (addons)', async() => {
    const result = await products.list();
    expect(result.success).to.be.true;
    expect(result.addons.length).to.be.greaterThan(0);
  });

  it('should get specific product (addon)', async() => {
    const result = await products.retrieve(mockups.product);
    expect(result.success).to.be.true;
    expect(result.addon.id).to.be.equal(mockups.product);
  });

});