import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class AnyTypeImpl extends Type<any> {
  toString(): string {
    return '(any)';
  }

  validate(): ValidationResult {
    return {passes: true};
  }
}

const INSTANCE = new AnyTypeImpl();

/**
 * Creates a type for any.
 */
export function AnyType<T>(): Type<T> {
  return INSTANCE;
}
