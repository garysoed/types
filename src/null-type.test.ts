import { assert, should } from '@gs-testing';
import { NullType } from './null-type';

describe('check.NullType', () => {
  describe('check', () => {
    should(`should return true if the target is null`, () => {
      assert(NullType.check(null)).to.beTrue();
    });

    should(`should return false if the target is not null`, () => {
      assert(NullType.check('blah')).to.beFalse();
    });
  });
});
