import {Type} from '../core/type';
import {ValidationResult} from '../core/validation-result';

export class UnionType<T> extends Type<T> {
  constructor(readonly types: ReadonlyArray<Type<unknown>>) {
    super();
  }

  toString(): string {
    const typesString = this.types.map((type) => `${type}`).join(' | ');

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
        ...result.causes.map((cause) => `>   ${cause}`),
      );
    }

    return {causes: allSubCauses, passes: false};
  }
}

type TypesOf<A extends readonly any[]> = {
  readonly [K in keyof A]: Type<A[K]>;
};

/**
 * Checks if a target satisfies at least one of the conditions.
 *
 * This lets you add a set of types where at least one must be satisfied for the checked object to
 * be treated as type T.
 * @param types Types to check.
 */
export function unionType<A extends readonly any[]>(
  types: [...TypesOf<A>],
): Type<A[number]> {
  return new UnionType(types);
}
