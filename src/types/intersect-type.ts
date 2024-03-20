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

/**
 * Checks if a target satisfies all of the conditions.
 *
 * This lets you add a set of types that must be satisfied for the checked object to be treated as
 * type T.
 * @param types Types to check.
 */
export function intersectType(): Type<any>;
export function intersectType<S0>(types: readonly [Type<S0>]): Type<S0>;
export function intersectType<S0, S1>(
  types: readonly [Type<S0>, Type<S1>],
): Type<S0 & S1>;
export function intersectType<S0, S1, S2>(
  types: readonly [Type<S0>, Type<S1>, Type<S2>],
): Type<S0 & S1 & S2>;
export function intersectType<S0, S1, S2, S3>(
  types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>],
): Type<S0 & S1 & S2 & S3>;
export function intersectType<S0, S1, S2, S3, S4>(
  types: readonly [Type<S0>, Type<S1>, Type<S2>, Type<S3>, Type<S4>],
): Type<S0 & S1 & S2 & S3 & S4>;
export function intersectType<T>(
  types: ReadonlyArray<Type<unknown>> = [],
): Type<T> {
  return new IntersectType(types);
}
