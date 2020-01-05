import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { booleanType } from './boolean-type';

test('@types/boolean-type', () => {
  test('validate', () => {
    should('should pass if the value is a native boolean', () => {
      assert(booleanType.validate(false)).to.haveProperties({passes: true});
    });

    should('should pass if the value is a Boolean object', () => {
      assert(booleanType.validate(Boolean(false))).to.haveProperties({passes: true});
    });

    should('should not pass otherwise', () => {
      assert(booleanType.validate(123)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a boolean/),
        ]),
        passes: false,
      });
    });
  });
});
