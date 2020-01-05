import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class SymbolType extends Type<symbol> {
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

export const symbolType: Type<symbol> = new SymbolType();
