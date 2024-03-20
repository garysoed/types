import {arrayThat, assert, should, stringThat, test} from 'gs-testing';

import {numberType} from './number-type';
import {stringType} from './string-type';
import {tupleOfType} from './tuple-of-type';

test('@types/tuple-of-type', () => {
  test('validate', () => {
    should('pass if the target is tuple of the correct type', () => {
      assert(
        tupleOfType([numberType, stringType]).validate([1, '1']),
      ).to.haveProperties({passes: true});
    });

    should('not pass if the tuple element has the wrong type', () => {
      assert(
        tupleOfType([numberType, stringType]).validate([1, 2]),
      ).to.haveProperties({
        causes: arrayThat<string>().haveExactElements([
          stringThat().match(/element 1 is not a string/),
          stringThat().match(/not a string/),
        ]),
        passes: false,
      });
    });

    should('not pass if the target is not an Object', () => {
      assert(
        tupleOfType([numberType, stringType]).validate(123),
      ).to.haveProperties({
        causes: arrayThat<string>().haveExactElements([
          stringThat().match(/not a tuple/),
        ]),
        passes: false,
      });
    });
  });
});
