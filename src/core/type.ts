import {TypeAssertionError} from './type-assertion-error';
import {ValidationResult} from './validation-result';

/**
 * Represents a type used for type checking.
 * @param <T> The type to check.
 */
export abstract class Type<T> {
  assert(target: unknown): asserts target is T {
    const result = this.validate(target);
    if (result.passes) {
      return;
    }

    throw new TypeAssertionError(
        `${target} is not of type ${this.toString()}`,
        result.causes,
    );
  }

  /**
   * Checks if the target is of type T.
   * @param target Target to check.
   * @return True iff the target is of type T.
   */
  check(target: unknown): target is T {
    return this.validate(target).passes;
  }

  /**
   * @return String representation of the type.
   */
  abstract toString(): string;

  abstract validate(target: unknown): ValidationResult<T>;
}
