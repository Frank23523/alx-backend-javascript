const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when SUM is passed with 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when SUM is passed with -0.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when SUBTRACT is passed with 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when SUBTRACT is passed with 2.4 and 2.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 2.4), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when DIVIDE is passed with 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when DIVIDE is passed with 1.4 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => {
        calculateNumber('MULTIPLY', 1, 2);
      }, /^Error: Invalid operation type$/);
    });
  });
});
