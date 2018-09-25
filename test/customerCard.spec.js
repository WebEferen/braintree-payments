'use strict';
const chai = require('chai');
const config = require('./config');
const mockups = config.mockups;
const expect = chai.expect;

const payments = require('../dist').payments(config.payments);
const customers = payments.customers();

const customer = {id: '', card: {token: ''}};

describe('Customer Card', () => {

  it('should create braintree customer', async () => {
    const result = await customers.create(mockups.customer.valid);
    expect(result.success).to.be.true;
    customer.id = result.customer.id;
  });

  it('should NOT attach card', async() => {
    const result = await customers.attachCard(customer.id, mockups.card.invalid.paymentMethodNonce);
    expect(result.success).to.be.false;
    expect(result.error.status).to.be.equal('processor_declined');
  });

  it('should NOT retrieve card', async() => {
    const result = await customers.retrieveCard(customer.id, 'invalid');
    expect(result.success).to.be.false;
  });

  it('should NOT update card', async() => {
    const result = await customers.updateCard(customer.id, 'invalid');
    expect(result.success).to.be.false;
  });

  it('should NOT delete card', async() => {
    const result = await customers.deleteCard(customer.id, 'invalid');
    expect(result.success).to.be.false;
  });

  it('should attach card', async() => {
    const result = await customers.attachCard(customer.id, mockups.card.valid.paymentMethodNonce);
    expect(result.success).to.be.true;
    expect(result.card.cardType).to.be.equal('Visa');
    customer.card.token = result.card.token;
  });

  it('should retrieve card', async() => {
    const result = await customers.retrieveCard(customer.id, customer.card.token);
    expect(result.success).to.be.true;
    expect(result.card.token).to.be.equal(customer.card.token);
  });

  it('should update card', async() => {
    const updated = {cardholderName: 'Mike Makowski'};
    const result = await customers.updateCard(customer.id, customer.card.token, updated);
    expect(result.success).to.be.true;
    expect(result.card.token).to.be.equal(customer.card.token);
    expect(result.card.cardholderName).to.be.equal('Mike Makowski');
  });

  it('should delete card', async() => {
    const result = await customers.deleteCard(customer.id, customer.card.token);
    expect(result.success).to.be.true;
    expect(result.card.deleted).to.be.true;
  });

  it('should delete braintree customer', async () => {
    const result = await customers.delete(customer.id);
    expect(result.success).to.be.true;
    expect(result.customer.deleted).to.be.true;
  });

});
