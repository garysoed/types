import { assert } from 'gs-testing/export/main';
import { NonNullType } from './non-null-type';

describe('check.NonNullType', () => {
  describe('check', () => {
    it('should return true if the target is non null', () => {
      assert(NonNullType<string>().check('abc')).to.beTrue();
    });

    it('should return false if the target is null', () => {
      assert(NonNullType<string>().check(null)).to.beFalse();
    });
  });
});
