'use strict';
const chai = require('chai');
const expect = chai.expect;

const environment = require('../dist/lib/helpers/EnvironmentHelper').default;

describe('Environment Helper', () => {

  it('should get Sandbox environment', () => {
    expect(environment.get('Sandbox')).not.to.be.undefined;
  });

  it('should get Qa environment', () => {
    expect(environment.get('Qa')).not.to.be.undefined;
  });

  it('should get Development environment', () => {
    expect(environment.get('Development')).not.to.be.undefined;
  });

  it('should get Production environment', () => {
    expect(environment.get('Production')).not.to.be.undefined;
  });

  it('should NOT get Unknown environment', () => {
    expect(environment.get('Unknown')).to.be.null;
  });
});