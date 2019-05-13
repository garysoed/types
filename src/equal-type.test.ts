import { assert, should, test } from '@gs-testing';
import { EqualType } from './equal-type';

test('check.EqualType', () => {
  test('check', () => {
    should(`should return true if the test value is equal to the given value`, () => {
      assert(EqualType(1).check(1)).to.beTrue();
    });

    should(`should return false if the test value is different from the given value`, () => {
      assert(EqualType(2).check(1)).to.beFalse();
    });
  });
});
