import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class InstanceofType<T> extends Type<T> {
  constructor(
      private readonly ctor: (new (...args: any[]) => T)|Function,
  ) {
    super();
  }

  toString(): string {
    return `(instanceof ${this.ctor.name})`;
  }

  validate(target: unknown): ValidationResult<T> {
    const passes = target instanceof this.ctor;
    if (passes) {
      return {passes, value: target as T};
    }

    return {
      causes: [`not an instance of ${this.ctor.name}`],
      passes: false,
    };
  }
}

/**
 * Checks if the target is an instance of the given ctor.
 * @param ctor Ctor to check the type.
 * @return The instanceof type.
 */
export function instanceofType<T>(ctor: (new (...args: any[]) => T) | Function): Type<T> {
  return new InstanceofType(ctor);
}
