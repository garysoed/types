import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';
import { instanceofType } from './instanceof-type';

class ArrayOfType<T> extends Type<T[]> {
  constructor(private readonly elementType: Type<T>) {
    super();
  }

  toString(): string {
    return `${this.elementType}[]`;
  }

  validate(target: unknown): ValidationResult {
    if (instanceofType(Array).check(target)) {
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
      return {causes: ['not an array'], passes: false};
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
export function arrayOfType<T>(type: Type<T>): Type<T[]> {
  return new ArrayOfType(type);
}
