
import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { NativeType } from './native-type';

test('@types/is-native', () => {
  test('validate', () => {
    should('pass if the value is a boolean', () => {
      assert(NativeType.validate(true)).to.haveProperties({passes: true});
    });

    should('pass if the value is a number', () => {
      assert(NativeType.validate(123)).to.haveProperties({passes: true});
    });

    should('pass if the value is a string', () => {
      assert(NativeType.validate('value')).to.haveProperties({passes: true});
    });

    should('pass if the value is a symbol', () => {
      assert(NativeType.validate(Symbol('symbol'))).to.haveProperties({passes: true});
    });

    should('not pass otherwise', () => {
      assert(NativeType.validate({})).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a boolean/),
          stringThat().match(/>   not a boolean/),
          stringThat().match(/not a number/),
          stringThat().match(/>   not a number/),
          stringThat().match(/not a string/),
          stringThat().match(/>   not a string/),
          stringThat().match(/not a symbol/),
          stringThat().match(/>   not a symbol/),
        ]),
        passes: false,
      });
    });
  });
});
