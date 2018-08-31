# Braintree Payments Module

> Braintree deployment and build status

[![pipeline status](https://gitlab.com/WebEferen/braintree-payments/badges/master/pipeline.svg)](https://gitlab.com/WebEferen/braintree-payments/commits/master)
[![coverage report](https://gitlab.com/WebEferen/braintree-payments/badges/master/coverage.svg)](https://gitlab.com/WebEferen/braintree-payments/commits/master)

## Getting started

> Read the documentation under **docs**

To get that on the master server just type:

```javascript
npm install braintree-payments
```

To check current status take a look on the tests:

```javascript
npm test
```

## Working with the bridge

First of all we have to specify the braintree module instance and paste the configuration inside **Payments** constructor.

```javascript
const Payments = Braintree.Payments(configuration, currencies, defaultCurrency = 'EUR');
```

> Inside configuration we will have to specify some params

```javascript
const configuration = {
  environment: 'Sandbox | Qa | Development | Production',
  merchantId: 'MerchantID',
  publicKey: 'PublicKey',
  privateKey: 'PrivateKey'
};
```

> Inside currencies we will have to specify multiple merchant accounts for multiple currencies

```javascript
const currencies = [
  { currency: 'EUR', account: 'braintreeAccountIdForEur' },
  { currency: 'USD', account: 'braintreeAccountIdForUsd' },
  { currency: 'PLN', account: 'braintreeAccountIdForPln' }
];
```