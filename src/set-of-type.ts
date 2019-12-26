import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';
import { InstanceofType } from './instanceof-type';

class SetTypeImpl<T> extends Type<Set<T>> {
  constructor(private readonly elementType: Type<T>) {
    super();
  }

  toString(): string {
    return `${this.elementType}[]`;
  }

  validate(target: unknown): ValidationResult {
    if (InstanceofType(Set).check(target)) {
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

      return {passes: true};
    } else {
      return {causes: ['not a set'], passes: false};
    }
  }
}

/**
 * Checks if the elements of the given array are all of the given type.
 *
 * @param type Type of the elements.
 * @param <T> Type of the element.
 * @return The array type.
 */
export function SetOfType<T>(type: Type<T>): Type<Set<T>> {
  return new SetTypeImpl(type);
}
