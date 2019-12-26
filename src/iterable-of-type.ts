import { Type } from './core/type';
import { TypeAssertionError } from './core/type-assertion-error';
import { ValidationResult } from './core/validation-result';
import { HasPropertiesType } from './has-properties-type';
import { InstanceofType } from './instanceof-type';

const IterableType: Type<Iterable<any>> = HasPropertiesType<Iterable<any>>(
    {[Symbol.iterator]: InstanceofType(Function)},
);

class IterableOfTypeImpl<T> extends Type<Iterable<T>> {
  constructor(private readonly type: Type<T>) {
    super();
  }

  toString(): string {
    return `Iterable<${this.type}>`;
  }

  validate(target: unknown): ValidationResult {
    try {
      IterableType.assert(target);
    } catch (e) {
      if (!(e instanceof TypeAssertionError)) {
        throw e;
      }

      return {
        causes: [
          `not an ${this.toString()}`,
          ...e.causes,
        ],
        passes: false,
      };
    }

    const targetArray = [...target];
    for (let i = 0; i < targetArray.length; i++) {
      const result = this.type.validate(targetArray[i]);
      if (!result.passes) {
        return {
          causes: [
            `item ${i} is not a ${this.type}`,
            ...result.causes,
          ],
          passes: false,
        };
      }
    }

    return {passes: true};
  }
}

/**
 * Creates a type of an iterable where each element in the object is of the given type.
 * @param type Type of the element in the iterable.
 */
export function IterableOfType<T>(type: Type<T>): Type<Iterable<T>> {
  return new IterableOfTypeImpl(type);
}
