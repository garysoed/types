import { Type } from './type';

/**
 * Checks if the target is non null.
 * @return The non null type.
 */
export function NonNullType<T>(): Type<T> {
  return {
    check(target: any): target is T {
      return target !== null;
    },

    toString(): string {
      return '(!== null)';
    },
  };
}
