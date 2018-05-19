import { Type } from './type';

/**
 * Creates a type for any.
 */
export function AnyType<T>(): Type<T> {
  return {
    check(_: any): _ is T {
      return true;
    },

    toString(): string {
      return '(any)';
    },
  };
}
