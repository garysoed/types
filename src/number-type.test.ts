import { assert, should } from '@gs-testing';
import { NumberType } from './number-type';

describe('check.NumberType', () => {
  describe('isNumber', () => {
    should('should return true if the value is a native number', () => {
      assert(NumberType.check(123)).to.beTrue();
    });

    should('should return true if the value is a Number object', () => {
      assert(NumberType.check(Number(123))).to.beTrue();
    });

    should('should return false otherwise', () => {
      assert(NumberType.check('string')).to.beFalse();
    });
  });
});
