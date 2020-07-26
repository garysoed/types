import { Type } from '../core/type';
import { ValidationResult } from '../core/validation-result';

class StringType extends Type<string> {
  toString(): string {
    return 'string';
  }

  validate(target: unknown): ValidationResult<string> {
    if (typeof target === 'string' || target instanceof String) {
      return {passes: true, value: target as string};
    }

    return {passes: false, causes: ['not a string']};
  }
}

export const stringType: Type<string> = new StringType();
