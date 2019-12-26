import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class UnionTypeImpl<T> extends Type<T> {
  constructor(private readonly types: ReadonlyArray<Type<unknown>>) {
    super();
  }

  toString(): string {
    const typesString = this.types.map(type => `${type}`).join(' | ');

    return `(${typesString})`;
  }

  validate(target: unknown): ValidationResult {
    const allSubCauses: string[] = [];
    for (const subtype of this.types) {
      const result = subtype.validate(target);
      if (result.passes) {
        return {passes: true};
      }

      allSubCauses.push(
          `not a ${subtype}`,
          ...result.causes.map(cause => `>   ${cause}`),
      );
    }

    return {causes: allSubCauses, passes: false};
  }
}

/**
 * Checks if a target satisfies at least one of the conditions.
 *
 * This lets you add a set of types where at least one must be satisfied for the checked object to
 * be treated as type T.
 * @param types Types to check.
 */
export function UnionType(): Type<never>;
export function UnionType<S0>(types: readonly [Type<S0>]): Type<S0>;
export function UnionType<S0, S1>(
    types: readonly [Type<S0>, Type<S1>],
): Type<S0|S1>;
export function UnionType<S0, S1, S2>(
    types: readonly [Type<S0>, Type<S1>, Type<S2>],
): Type<S0|S1|S2>;
export function UnionType<S0, S1, S2, S3>(
    types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>],
): Type<S0|S1|S2|S3>;
export function UnionType<T>(types: ReadonlyArray<Type<unknown>> = []): Type<T> {
  return new UnionTypeImpl(types);
}
