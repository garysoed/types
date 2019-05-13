import { assert, should } from '@gs-testing';
import { SymbolType } from './symbol-type';

describe('check.SymbolType', () => {
  describe('isSymbol', () => {
    should('should return true if the value is a symbol', () => {
      assert(SymbolType.check(Symbol('symbol'))).to.beTrue();
    });

    should('should return false otherwise', () => {
      assert(SymbolType.check(true)).to.beFalse();
    });
  });
});
