import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { StringType } from './string-type';

test('@types/string-type', () => {
  test('validate', () => {
    should('pass if the value is a native string', () => {
      assert(StringType.validate('string')).to.haveProperties({passes: true});
    });

    should('pass if the value is a String object', () => {
      assert(StringType.validate(String('string'))).to.haveProperties({passes: true});
    });

    should('not pass otherwise', () => {
      assert(StringType.validate(Symbol('symbol'))).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a string/),
        ]),
        passes: false,
      });
    });
  });
});
