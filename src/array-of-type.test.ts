import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { arrayOfType } from './array-of-type';
import { stringType } from './string-type';

test('@types/array-of-type', () => {
  test('validate', () => {
    should('should pass if all the elements passes the given type', () => {
      assert(arrayOfType(stringType).validate(['a', 'b', 'c'])).to.haveProperties({
        passes: true,
      });
    });

    should('should not pass if an element in the array does not pass the given type', () => {
      assert(arrayOfType(stringType).validate(['a', 1, 'c'])).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/1 is not of type string/),
          stringThat().match(/not a string/),
        ]),
        passes: false,
      });
    });

    should('should not pass if not an array', () => {
      assert(arrayOfType(stringType).validate(new Set(['a', 1, 'c']))).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not an array/),
        ]),
        passes: false,
      });
    });
  });
});
