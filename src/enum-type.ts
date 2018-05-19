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
      // tslint:disable-next-line:strict-type-predicates
      return enumType[target] !== undefined;
    },

    toString(): string {
      return `Enum`;
    },
  };
}
