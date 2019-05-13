import { Type } from './type';

/**
 * Represents an enum.
 */
interface Enum {
  [key: number]: string;
}

/**
 * Creates type for the given enum.
 * @param enumType Type of enum to check.
 */
export function EnumType<E>(enumType: Enum): Type<E> {
  return {
    check(target: any): target is E {
      for (const key in enumType) {
        if (enumType[key] === target) {
          return true;
        }
      }

      return false;
    },

    toString(): string {
      return `Enum`;
    },
  };
}
