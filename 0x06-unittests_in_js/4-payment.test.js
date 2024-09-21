const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleSpy;

  beforeEach(() => {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct total of 10', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
