import { Type } from './type';

/**
 * Checks if a target satisfies at least one of the conditions.
 *
 * This lets you add a set of types where at least one must be satisfied for the checked object to
 * be treated as type T.
 * @param types Types to check.
 */
export function UnionType<T>(types: Type<any>[] = []): Type<T> {
  return {
    check(target: any): target is T {
      return types
          .some((type: Type<T>) => {
            return type.check(target);
          });
    },

    toString(): string {
      const typesString = types.map((type: Type<T>) => `${type}`).join(' | ');

      return `(${typesString})`;
    },
  };
}
