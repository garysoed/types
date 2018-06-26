import { assert, should } from 'gs-testing/export/main';
import { BooleanType } from './boolean-type';

describe('check.BooleanType', () => {
  describe('check', () => {
    should('should return true if the value is a native boolean', () => {
      assert(BooleanType.check(false)).to.beTrue();
    });

    should('should return true if the value is a Boolean object', () => {
      assert(BooleanType.check(Boolean(false))).to.beTrue();
    });

    should('should return false otherwise', () => {
      assert(BooleanType.check(123)).to.beFalse();
    });
  });
});
