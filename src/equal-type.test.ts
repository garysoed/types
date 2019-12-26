import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { EqualType } from './equal-type';

test('@types/equal-type', () => {
  test('validate', () => {
    should(`pass if the test value is equal to the given value`, () => {
      assert(EqualType(1).validate(1)).to.haveProperties({passes: true});
    });

    should(`not pass if the test value is different from the given value`, () => {
      assert(EqualType(2).validate(1)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not equal to 2/),
        ]),
        passes: false,
      });
    });
  });
});
