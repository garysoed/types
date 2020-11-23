import {Type} from '../core/type';
import {TypeAssertionError} from '../core/type-assertion-error';
import {ValidationResult} from '../core/validation-result';

import {hasPropertiesType} from './has-properties-type';
import {instanceofType} from './instanceof-type';

const IterableType: Type<Iterable<any>> = hasPropertiesType<Iterable<any>>(
    {[Symbol.iterator]: instanceofType(Function)},
);

export class IterableOfType<T> extends Type<Iterable<T>> {
  constructor(readonly type: Type<T>) {
    super();
  }

  toString(): string {
    return `Iterable<${this.type}>`;
  }

  validate(target: unknown): ValidationResult<Iterable<T>> {
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

    return {passes: true, value: target};
  }
}

/**
 * Creates a type of an iterable where each element in the object is of the given type.
 * @param type Type of the element in the iterable.
 */
export function iterableOfType<T>(type: Type<T>): Type<Iterable<T>> {
  return new IterableOfType(type);
}
