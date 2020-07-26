import { Type } from '../core/type';
import { ValidationResult } from '../core/validation-result';

class NullType extends Type<null> {
  toString(): string {
    return 'null';
  }

  validate(target: unknown): ValidationResult<null> {
    if (target === null) {
      return {passes: true, value: target};
    }

    return {passes: false, causes: ['not null']};
  }
}

export const nullType: Type<null> = new NullType();
