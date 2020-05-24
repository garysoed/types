import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class BooleanType extends Type<boolean> {
  toString(): string {
    return 'boolean';
  }

  validate(target: unknown): ValidationResult<boolean> {
    const isBoolean = typeof target === 'boolean' || target instanceof Boolean;
    if (isBoolean) {
      return {passes: true, value: target as boolean};
    }

    return {passes: false, causes: ['not a boolean']};
  }
}

export const booleanType: Type<boolean> = new BooleanType();
