import { HasPropertiesType } from './has-properties-type';
import { InstanceofType } from './instanceof-type';
import { Type } from './type';

const IterableType = HasPropertiesType<Iterable<any>>(
    {[Symbol.iterator]: InstanceofType(Function)});

/**
 * Creates a type of an iterable where each element in the object is of the given type.
 * @param type Type of the element in the iterable.
 */
export function IterableOfType<T, I extends Iterable<T>>(type: Type<T>): Type<I> {
  return {
    check(target: any): target is I {
      if (!IterableType.check(target)) {
        return false;
      }

      for (const item of target) {
        if (!type.check(item)) {
          return false;
        }
      }

      return true;
    },

    toString(): string {
      return `Iterable<${type}>`;
    },
  };
}
