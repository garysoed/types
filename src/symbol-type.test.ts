import { arrayThat, assert, should, stringThat, test } from '@gs-testing';

import { SymbolType } from './symbol-type';

test('@types/symbol-type', () => {
  test('validate', () => {
    should('pass if the value is a symbol', () => {
      assert(SymbolType.validate(Symbol('symbol'))).to.haveProperties({passes: true});
    });

    should('not pass otherwise', () => {
      assert(SymbolType.validate(true)).to.haveProperties({
        causes: arrayThat().haveExactElements([
          stringThat().match(/not a symbol/),
        ]),
        passes: false,
      });
    });
  });
});
