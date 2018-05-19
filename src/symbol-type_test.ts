import { assert } from 'gs-testing/export/main';
import { SymbolType } from './symbol-type';

describe('check.SymbolType', () => {
  describe('isSymbol', () => {
    it('should return true if the value is a symbol', () => {
      assert(SymbolType.check(Symbol('symbol'))).to.beTrue();
    });

    it('should return false otherwise', () => {
      assert(SymbolType.check(true)).to.beFalse();
    });
  });
});
