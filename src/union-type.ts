import { Type } from './core/type';
import { ValidationResult } from './core/validation-result';

class UnionType<T> extends Type<T> {
  constructor(private readonly types: ReadonlyArray<Type<unknown>>) {
    super();
  }

  toString(): string {
    const typesString = this.types.map(type => `${type}`).join(' | ');

    return `(${typesString})`;
  }

  validate(target: unknown): ValidationResult<T> {
    const allSubCauses: string[] = [];
    for (const subtype of this.types) {
      const result = subtype.validate(target);
      if (result.passes) {
        return {passes: true, value: target as T};
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
export function unionType(): Type<never>;
export function unionType<S0>(types: readonly [Type<S0>]): Type<S0>;
export function unionType<S0, S1>(
    types: readonly [Type<S0>, Type<S1>],
): Type<S0|S1>;
export function unionType<S0, S1, S2>(
    types: readonly [Type<S0>, Type<S1>, Type<S2>],
): Type<S0|S1|S2>;
export function unionType<S0, S1, S2, S3>(
    types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>],
): Type<S0|S1|S2|S3>;
export function unionType<S0, S1, S2, S3, S4>(
    types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>, Type<S4>],
): Type<S0|S1|S2|S3|S4>;
export function unionType<S0, S1, S2, S3, S4, S5>(
    types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>, Type<S4>, Type<S5>],
): Type<S0|S1|S2|S3|S4|S5>;
export function unionType<S0, S1, S2, S3, S4, S5, S6>(
    types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>, Type<S4>, Type<S5>, Type<S6>],
): Type<S0|S1|S2|S3|S4|S5|S6>;
export function unionType<S0, S1, S2, S3, S4, S5, S6, S7>(
    // tslint:disable-next-line: max-line-length
    types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>, Type<S4>, Type<S5>, Type<S6>, Type<S7>],
): Type<S0|S1|S2|S3|S4|S5|S6|S7>;
export function unionType<S0, S1, S2, S3, S4, S5, S6, S7, S8>(
    // tslint:disable-next-line: max-line-length
    types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>, Type<S4>, Type<S5>, Type<S6>, Type<S7>, Type<S8>],
): Type<S0|S1|S2|S3|S4|S5|S6|S7|S8>;
export function unionType<S0, S1, S2, S3, S4, S5, S6, S7, S8, S9>(
    // tslint:disable-next-line: max-line-length
    types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>, Type<S4>, Type<S5>, Type<S6>, Type<S7>, Type<S8>, Type<S9>],
): Type<S0|S1|S2|S3|S4|S5|S6|S7|S8|S9>;
export function unionType<T>(types: ReadonlyArray<Type<unknown>> = []): Type<T> {
  return new UnionType(types);
}
