import { arrayThat, assert, should, stringThat, test } from 'gs-testing';

import { iterableOfType } from './iterable-of-type';
import { numberType } from './number-type';

test('@types/iterable-of-type', () => {
  test('validate', () => {
    should(`pass if the target is an iterable with the correct elements`, () => {
      assert(iterableOfType(numberType).validate([1, 2, 3])).to.haveProperties({passes: true});
    });

    should(`not pass if one of the elements is of the wrong type`, () => {
      assert(iterableOfType(numberType).validate([1, '2', 3])).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/item 1 is not a number/),
          stringThat().match(/not a number/),
        ]),
        passes: false,
      });
    });

    should(`not pass if not an iterable`, () => {
      assert(iterableOfType(numberType).validate(123)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not an Iterable<number>/),
          stringThat().match(/not an object/),
        ]),
        passes: false,
      });
    });
  });
});
