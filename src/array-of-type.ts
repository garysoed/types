import { InstanceofType } from './instanceof-type';
import { Type } from './type';

/**
 * Checks if the elements of the given array are all of the given type.
 *
 * @param type Type of the elements.
 * @param <T> Type of the element.
 * @return The array type.
 */
export function ArrayOfType<T>(type: Type<T>): Type<T[]> {
  return {
    check(target: any): target is T[] {
      if (InstanceofType(Array).check(target)) {
        return target.every((element: any) => {
          return type.check(element);
        });
      } else {
        return false;
      }
    },

    toString(): string {
      return `${type}[]`;
    },
  };
}
