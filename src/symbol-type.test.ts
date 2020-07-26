import { arrayThat, assert, should, stringThat, test } from 'gs-testing';

import { symbolType } from './symbol-type';

test('@types/symbol-type', () => {
  test('validate', () => {
    should('pass if the value is a symbol', () => {
      assert(symbolType.validate(Symbol('symbol'))).to.haveProperties({passes: true});
    });

    should('not pass otherwise', () => {
      assert(symbolType.validate(true)).to.haveProperties({
        causes: arrayThat<string>().haveExactElements([
          stringThat().match(/not a symbol/),
        ]),
        passes: false,
      });
    });
  });
});
