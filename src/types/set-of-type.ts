import { Type } from '../core/type';
import { ValidationResult } from '../core/validation-result';
import { instanceofType } from './instanceof-type';

class SetType<T> extends Type<Set<T>> {
  constructor(private readonly elementType: Type<T>) {
    super();
  }

  toString(): string {
    return `Set<${this.elementType}>`;
  }

  validate(target: unknown): ValidationResult<Set<T>> {
    if (instanceofType(Set).check(target)) {
      for (const element of target) {
        const result = this.elementType.validate(element);
        if (!result.passes) {
          return {
            causes: [
              `element ${element} is not of type ${this.elementType}`,
              ...result.causes,
            ],
            passes: false,
          };
        }
      }

      return {passes: true, value: target as Set<T>};
    } else {
      return {causes: ['not a set'], passes: false};
    }
  }
}

/**
 * Checks if the elements of the given set are all of the given type.
 *
 * @param type Type of the elements.
 * @param <T> Type of the element.
 * @return The set type.
 */
export function setOfType<T>(type: Type<T>): Type<Set<T>> {
  return new SetType(type);
}
