const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when SUM is passed with 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when SUM is passed with -0.4 and 0.4', () => {
      expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when SUBTRACT is passed with 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when SUBTRACT is passed with 2.4 and 2.4', () => {
      expect(calculateNumber('SUBTRACT', 2.4, 2.4)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when DIVIDE is passed with 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when DIVIDE is passed with 1.4 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid operation type', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw(
        'Invalid operation type',
      );
    });
  });
});
