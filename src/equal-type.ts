import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class EqualType<T> extends Type<T> {
  constructor(private readonly value: T) {
    super();
  }


  toString(): string {
    return `${this.value}`;
  }

  validate(target: unknown): ValidationResult {
    if (target === this.value) {
      return {passes: true};
    }

    return {causes: [`not equal to ${this.value}`], passes: false};
  }
}

export function equalType<T>(value: T): Type<T> {
  return new EqualType(value);
}
