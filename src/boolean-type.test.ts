import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { BooleanType } from './boolean-type';

test('@types/boolean-type', () => {
  test('validate', () => {
    should('should pass if the value is a native boolean', () => {
      assert(BooleanType.validate(false)).to.haveProperties({passes: true});
    });

    should('should pass if the value is a Boolean object', () => {
      assert(BooleanType.validate(Boolean(false))).to.haveProperties({passes: true});
    });

    should('should not pass otherwise', () => {
      assert(BooleanType.validate(123)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a boolean/),
        ]),
        passes: false,
      });
    });
  });
});
