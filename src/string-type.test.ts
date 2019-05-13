import { assert, should } from '@gs-testing';
import { StringType } from './string-type';

describe('check.StringType', () => {
  describe('isString', () => {
    should('should return true if the value is a native string', () => {
      assert(StringType.check('string')).to.beTrue();
    });

    should('should return true if the value is a String object', () => {
      assert(StringType.check(String('string'))).to.beTrue();
    });

    should('should return false otherwise', () => {
      assert(StringType.check(Symbol('symbol'))).to.beFalse();
    });
  });
});
