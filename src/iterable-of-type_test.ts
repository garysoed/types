import { assert } from 'gs-testing/export/main';
import { IterableOfType } from './iterable-of-type';
import { NumberType } from './number-type';

describe('check.IterableOfType', () => {
  describe('check', () => {
    it(`should return true if the target is an iterable with the correct elements`, () => {
      assert(IterableOfType(NumberType).check([1, 2, 3])).to.beTrue();
    });

    it(`should return false if one of the elements is of the wrong type`, () => {
      assert(IterableOfType(NumberType).check([1, '2', 3])).to.beFalse();
    });

    it(`should return false if not an iterable`, () => {
      assert(IterableOfType(NumberType).check(123)).to.beFalse();
    });
  });
});
