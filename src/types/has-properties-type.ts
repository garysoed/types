import { Type } from '../core/type';
import { ValidationResult } from '../core/validation-result';

class HasPropertiesType<O extends {}> extends Type<O> {
  constructor(
      private readonly spec: {[K in keyof O]: Type<O[K]>},
  ) {
    super();
  }

  toString(): string {
    const entries: string[] = [];
    for (const key in this.spec) {
      if (this.spec.hasOwnProperty(key)) {
        entries.push(`${key}: ${this.spec[key]}`);
      }
    }

    return `{${entries.join(', ')}}`;
  }

  validate(target: unknown): ValidationResult<O> {
    if (!(target instanceof Object)) {
      return {causes: ['not an object'], passes: false};
    }

    const targetObj = target as Partial<O>;

    // Check the non symbolic keys.
    for (const key in this.spec) {
      if (!this.spec.hasOwnProperty(key)) {
        continue;
      }

      const element = targetObj[key];
      const spec = this.spec[key];
      const result = spec.validate(element);
      if (!result.passes) {
        return {
          causes: [
            `property ${key} is not of type ${spec}`,
            ...result.causes,
          ],
          passes: false,
        };
      }
    }

    // Check the symbolic keys.
    for (const key of Object.getOwnPropertySymbols(this.spec)) {
      const element = (targetObj as any)[key];
      const spec = (this.spec as any)[key];
      const result = spec.validate(element);

      if (!result.passes) {
        return {
          causes: [
            `property ${key.toString()} is not of type ${spec}`,
            ...result.causes,
          ],
          passes: false,
        };
      }
    }

    return {passes: true, value: target as O};
  }
}

/**
 * Creates a type of an object with known properties and their types.
 * @param spec Map of property of the expected object type to the type of that property.
 */
export function hasPropertiesType<OBJ>(spec: {[KEY in keyof OBJ]: Type<OBJ[KEY]>}): Type<OBJ> {
  return new HasPropertiesType(spec);
}
