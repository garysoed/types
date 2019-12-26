import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { NumberType } from './number-type';
import { StringType } from './string-type';
import { TupleOfType } from './tuple-of-type';

test('@types/tuple-of-type', () => {
  test('validate', () => {
    should(`pass if the target is tuple of the correct type`, () => {
      assert(TupleOfType([NumberType, StringType]).validate([1, '1'])).to
          .haveProperties({passes: true});
    });

    should(`not pass if the tuple element has the wrong type`, () => {
      assert(TupleOfType([NumberType, StringType]).validate([1, 2])).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/element 1 is not a string/),
          stringThat().match(/not a string/),
        ]),
        passes: false,
      });
    });

    should(`not pass if the target is not an Object`, () => {
      assert(TupleOfType([NumberType, StringType]).validate(123)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a tuple/),
        ]),
        passes: false,
      });
    });
  });
});
