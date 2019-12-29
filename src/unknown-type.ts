import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class UnknownTypeImpl extends Type<unknown> {
  toString(): string {
    return '(unknown)';
  }

  validate(): ValidationResult {
    return {passes: true};
  }
}

export const UnknownType = new UnknownTypeImpl();
