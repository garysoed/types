import { Type } from '../core/type';
import { ValidationResult } from '../core/validation-result';

type TypeOf<T> = {[K in keyof T]: Type<T[K]>};

export class TupleOfType<T extends unknown[]> extends Type<T> {
  constructor(readonly spec: TypeOf<T>) {
    super();
  }

  toString(): string {
    return `[${this.spec.map(type => `${type}`).join(', ')}]`;
  }

  validate(target: unknown): ValidationResult<T> {
    if (!(target instanceof Array)) {
      return {causes: ['not a tuple'], passes: false};
    }

    for (let i = 0; i < this.spec.length; i++) {
      const spec = this.spec[i];
      const result = spec.validate(target[i]);
      if (!result.passes) {
        return {
          causes: [
            `element ${i} is not a ${spec}`,
            ...result.causes,
          ],
          passes: false,
        };
      }
    }

    return {passes: true, value: target as T};
  }
}

/**
 * Creates a tuple type.
 * @param spec Types of the tuple values.
 */
export function tupleOfType<T extends unknown[]>(spec: TypeOf<T>): Type<T> {
  return new TupleOfType(spec);
}
