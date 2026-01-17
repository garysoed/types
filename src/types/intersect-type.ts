import {Type} from '../core/type';
import {ValidationResult} from '../core/validation-result';

export class IntersectType<T> extends Type<T> {
  constructor(readonly types: ReadonlyArray<Type<unknown>>) {
    super();
  }

  toString(): string {
    const typesString = this.types.map((type) => `${type}`).join(' & ');

    return `(${typesString})`;
  }

  validate(target: unknown): ValidationResult<T> {
    for (const subtype of this.types) {
      const result = subtype.validate(target);
      if (!result.passes) {
        return {
          causes: [`not a ${subtype}`, ...result.causes],
          passes: false,
        };
      }
    }

    return {passes: true, value: target as T};
  }
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;

/**
 * Checks if a target satisfies all of the conditions.
 *
 * This lets you add a set of types that must be satisfied for the checked object to be treated as
 * type T.
 * @param types Types to check.
 */
export function intersectType<T extends readonly any[]>(
  types: [...{[K in keyof T]: Type<T[K]>}],
): Type<UnionToIntersection<T[number]>> {
  return new IntersectType(types);
}
