import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class NotType<T, X extends T> extends Type<Exclude<T, X>> {
  constructor(
      private readonly type: Type<X>,
  ) {
    super();
  }

  toString(): string {
    return `not(${this.type})`;
  }

  validate(target: unknown): ValidationResult<Exclude<T, X>> {
    const result = this.type.validate(target);
    if (result.passes) {
      return {
        causes: [`is a ${this.type}`],
        passes: false,
      };
    }

    return {passes: true, value: target as Exclude<T, X>};
  }
}

/**
 * Checks if the target is an instance of the given ctor.
 * @param ctor Ctor to check the type.
 * @return The instanceof type.
 */
export function notType<T, X extends T>(type: Type<X>): Type<Exclude<T, X>> {
  return new NotType(type);
}
