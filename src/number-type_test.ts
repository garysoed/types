import { assert } from 'gs-testing/export/main';
import { NumberType } from './number-type';

describe('check.NumberType', () => {
  describe('isNumber', () => {
    it('should return true if the value is a native number', () => {
      assert(NumberType.check(123)).to.beTrue();
    });

    it('should return true if the value is a Number object', () => {
      assert(NumberType.check(Number(123))).to.beTrue();
    });

    it('should return false otherwise', () => {
      assert(NumberType.check('string')).to.beFalse();
    });
  });
});
