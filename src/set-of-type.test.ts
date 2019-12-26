import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { SetOfType } from './set-of-type';
import { StringType } from './string-type';

test('@types/set-of-type', () => {
  test('validate', () => {
    should('should pass if all the elements passes the given type', () => {
      assert(SetOfType(StringType).validate(new Set(['a', 'b', 'c']))).to.haveProperties({
        passes: true,
      });
    });

    should('should not pass if an element in the set does not pass the given type', () => {
      assert(SetOfType(StringType).validate(new Set(['a', 1, 'c']))).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/1 is not of type string/),
          stringThat().match(/not a string/),
        ]),
        passes: false,
      });
    });

    should('should not pass if not a set', () => {
      assert(SetOfType(StringType).validate(['a', 1, 'c'])).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a set/),
        ]),
        passes: false,
      });
    });
  });
});
