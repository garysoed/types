import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class SymbolTypeImpl extends Type<symbol> {
  toString(): string {
    return 'symbol';
  }

  validate(target: unknown): ValidationResult {
    const isSymbol = typeof target === 'symbol';
    if (isSymbol) {
      return {passes: true};
    }

    return {passes: false, causes: ['not a symbol']};
  }
}

export const SymbolType: Type<symbol> = new SymbolTypeImpl();
