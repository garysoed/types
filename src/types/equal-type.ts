import { Type } from '../core/type';
import { ValidationResult } from '../core/validation-result';

export class EqualType<T> extends Type<T> {
  constructor(readonly value: T) {
    super();
  }

  toString(): string {
    return `${this.value}`;
  }

  validate(target: unknown): ValidationResult<T> {
    if (target === this.value) {
      return {passes: true, value: target as T};
    }

    return {causes: [`not equal to ${this.value}`], passes: false};
  }
}

export function equalType<T>(value: T): Type<T> {
  return new EqualType(value);
}
