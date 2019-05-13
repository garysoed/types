import { assert, should } from '@gs-testing';
import { IsType } from './is-type';

describe('IsType', () => {
  describe('check', () => {
    should(`return true if the object is equal`, () => {
      const type = IsType(123);

      assert(type.check(123)).to.beTrue();
    });

    should(`return false if the object is unequal`, () => {
      const type = IsType(123);

      assert(type.check(345)).to.beFalse();
    });
  });
});
