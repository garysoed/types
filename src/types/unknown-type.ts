import { Type } from '../core/type';
import { ValidationResult } from '../core/validation-result';

class UnknownType extends Type<unknown> {
  toString(): string {
    return '(unknown)';
  }

  validate(value: unknown): ValidationResult<unknown> {
    return {passes: true, value};
  }
}

export const unknownType = new UnknownType();
