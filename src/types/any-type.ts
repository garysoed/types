import {Type} from '../core/type';
import {ValidationResult} from '../core/validation-result';

export class AnyType<T> extends Type<T> {
  toString(): string {
    return 'any';
  }

  validate(target: unknown): ValidationResult<T> {
    return {
      value: target as T,
      passes: true,
    };
  }
}

export function anyType<T = never>(): Type<T> {
  return new AnyType();
}
