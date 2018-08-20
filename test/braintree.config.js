const braintree = require('braintree');

module.exports = braintreeConfig = {
  merchantId: 'TestMerchantId',
  publicKey: 'publicKey',
  privateKey: 'privateKey',
  environment: braintree.Environment['Sandbox']
};