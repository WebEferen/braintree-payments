const payments = {
  merchant_id: 'wjdxkr5mydq87nnw',
  public_key: 'h8zctcyn9tfqkbn7',
  private_key: 'd5c10a011b4c23d7aaf9953f5fa6f5e8',
  environment: 'Sandbox',
};

const mockups = {

  // Customer Section

  customer: {
    valid: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'email@example.com',
      customFields: {
        // streetAddress: 'Some street',
        // extendedAddress: '123A',
        // firstName: 'Test',
        // lastName: 'Customer',
        // postalCode: '12 123',
        // countryCodeAlpha2: 'GB',
        // locality: 'London',
        // region: 'Greater London'
      }
    },
    invalid: {
      firstName: 'John',
      lastName: 'Doe',
    }
  },

  // Cards Section
  card: {
    valid: {
      paymentMethodNonce: 'fake-valid-visa-nonce'
    },
    invalid: {
      paymentMethodNonce: 'fake-processor-declined-visa-nonce'
    }
  }
  
};

module.exports = {payments, mockups};