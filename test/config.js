const braintree = require('braintree');

const payments = {
  merchantId: 'wjdxkr5mydq87nnw',
  publicKey: 'h8zctcyn9tfqkbn7',
  privateKey: 'd5c10a011b4c23d7aaf9953f5fa6f5e8',
  environment: braintree.Environment['Sandbox']
};

const customerId = 'testCustomerId';
const planId = 'basicAnalyticsPlan';
const addonId = 'growthModeler';

const paymentMethodNonce = 'fake-valid-nonce';
const paymentMethodToken = 'testCustomerToken';
const existingSubscriptionId = 'testSubscriptionId';

const mockups = {

  // Plan Section
  planId: planId,
  invalidPlanId: 'invalidPlan',

  // Addon Section
  addonId: addonId,
  invalidAddonId: 'invalidAddon',

  // Customer Section
  invalidCustomerId: 'invalidId',

  testCustomer: {
    id: customerId,
    firstName: 'Test',
    lastName: 'Customer',
    email: 'test@test.test',
    phone: '111222333444'
  },

  validCustomer: {
    id: 'validCustomerId',
    firstName: 'John',
    lastName: 'Doe',
    email: 'email@example.com',
    phone: '111222333'
  },

  validCustomerUpdate: {
    firstName: 'Johny',
    lastName: 'Bravo'
  },

  invalidCustomer: {
    id: '123_!@$+()*',
    firstName: 'John',
    lastName: 'Doe',
    email: 'email@example.com',
    phone: '111222333'
  },

  // Subscription Section
  invalidSubscriptionId: 'invalidSubscriptionId',

  validSubscription: {
    paymentMethodToken: paymentMethodToken,
    planId: planId,
    addOns: []
  },

  invalidSubscription: {
    id: existingSubscriptionId,
    paymentMethodToken: paymentMethodToken,
    planId: planId,
    addOns: []
  },

  validSubscriptionUpdate: {
    price: 300
  },

  // Transaction Section
  validTransaction: {
    customerId: customerId,
    amount: 99,
    paymentMethodNonce: paymentMethodNonce
  },

  validTransactionUpdate: {
    amount: 100
  },

  // PaymentMethod Section
  paymentMethodToken: paymentMethodToken,
  invalidPaymentMethodToken: 'someInvalidToken',

  validPaymentMethod: {
    customerId: customerId,
    paymentMethodNonce: paymentMethodNonce
  },

  invalidPaymentMethod: {
    customerId: 'notExistingCustomer'
  }

};

module.exports = {payments, mockups};