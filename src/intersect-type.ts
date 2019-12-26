import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class IntersectTypeImpl<T> extends Type<T> {
  constructor(private readonly types: ReadonlyArray<Type<unknown>>) {
    super();
  }

  toString(): string {
    const typesString = this.types.map(type => `${type}`).join(' & ');

    return `(${typesString})`;
  }

  validate(target: unknown): ValidationResult {
    for (const subtype of this.types) {
      const result = subtype.validate(target);
      if (!result.passes) {
        return {
          causes: [
            `not a ${subtype}`,
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
 * Checks if a target satisfies all of the conditions.
 *
 * This lets you add a set of types that must be satisfied for the checked object to be treated as
 * type T.
 * @param types Types to check.
 */
export function IntersectType(): Type<any>;
export function IntersectType<S0>(types: readonly [Type<S0>]): Type<S0>;
export function IntersectType<S0, S1>(
    types: readonly [Type<S0>, Type<S1>],
): Type<S0&S1>;
export function IntersectType<T>(types: ReadonlyArray<Type<unknown>> = []): Type<T> {
  return new IntersectTypeImpl(types);
}
