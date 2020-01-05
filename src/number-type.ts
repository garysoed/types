import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class NumberType extends Type<number> {
  toString(): string {
    return 'number';
  }

  validate(target: unknown): ValidationResult {
    const isNumber = typeof target === 'number' || target instanceof Number;
    if (isNumber) {
      return {passes: true};
    }

    return {passes: false, causes: ['not a number']};
  }
}

export const numberType: Type<number> = new NumberType();
