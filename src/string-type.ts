import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class StringType extends Type<string> {
  toString(): string {
    return 'string';
  }

  validate(target: unknown): ValidationResult {
    const isString = typeof target === 'string' || target instanceof String;
    if (isString) {
      return {passes: true};
    }

    return {passes: false, causes: ['not a string']};
  }
}

export const stringType: Type<string> = new StringType();
