import { assert, should } from 'gs-testing/export/main';
import { NumberType } from './number-type';
import { StringType } from './string-type';
import { TupleOfType } from './tuple-of-type';

describe('check.TupleOfType', () => {
  describe('check', () => {
    should(`should return true if the target is tuple of the correct type`, () => {
      assert(TupleOfType([NumberType, StringType]).check([1, '1'])).to.beTrue();
    });

    should(`should return false if the tuple element has the wrong type`, () => {
      assert(TupleOfType([NumberType, StringType]).check([1, 2])).to.beFalse();
    });

    should(`should return false if the target is not an Object`, () => {
      assert(TupleOfType([NumberType, StringType]).check(123)).to.beFalse();
    });
  });
});
