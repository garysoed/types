import {Type} from '../core/type';
import {ValidationResult} from '../core/validation-result';

type TypeSpec<O extends {}> = {readonly [K in keyof O]: Type<O[K]>};
type SpecMap<O extends {}> = ReadonlyMap<keyof O, Type<unknown>>;

export class HasPropertiesType<O extends {}> extends Type<O> {
  constructor(
      private readonly requiredSpec: SpecMap<O>,
      private readonly optionalSpec: SpecMap<O>,
  ) {
    super();
  }

  toString(): string {
    const entries: string[] = [];
    for (const [key, type] of this.requiredSpec) {
      entries.push(`${key.toString()}: ${type}`);
    }

    for (const [key, type] of this.optionalSpec) {
      entries.push(`${key.toString()}?: ${type}`);
    }

    return `{${entries.join(', ')}}`;
  }

  validate(target: unknown): ValidationResult<O> {
    if (!(target instanceof Object)) {
      return {causes: ['not an object'], passes: false};
    }
    const targetObj = target as Partial<O>;

    // Check the required entries
    for (const [key, spec] of this.requiredSpec) {
      if (!(key in target)) {
        return {
          causes: [`has no property ${key.toString()}`],
          passes: false,
        };
      }

      const result = spec.validate(targetObj[key]);
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

    // Check the optional entries
    const requiredKeys = new Set(this.requiredSpec.keys());
    for (const key of getOwnKeys(targetObj)) {
      if (requiredKeys.has(key)) {
        // Skip the required ones, since we've checked them.
        continue;
      }

      const optionalSpec = this.optionalSpec.get(key);
      if (!optionalSpec) {
        continue;
      }

      const result = optionalSpec.validate(targetObj[key]);
      if (!result.passes) {
        return {
          causes: [
            `optional property ${key.toString()} is not of type ${optionalSpec}`,
            ...result.causes,
          ],
          passes: false,
        };
      }
    }

    return {passes: true, value: target as O};
  }
}

function getOwnKeys<O extends {}>(obj: O): ReadonlySet<keyof O> {
  const keySet = new Set<keyof O>();
  for (const key of Object.keys(obj)) {
    keySet.add(key as keyof O);
  }

  for (const symbolKey of Object.getOwnPropertySymbols(obj)) {
    keySet.add(symbolKey as keyof O);
  }

  return keySet;
}

function convertToSpecMap<O extends TypeSpec<{}>>(obj: O): SpecMap<O> {
  const specMap = new Map<keyof O, Type<unknown>>();
  for (const key of Object.keys(obj)) {
    specMap.set(key as keyof O, obj[key as keyof O] as unknown as Type<unknown>);
  }

  for (const symbolKey of Object.getOwnPropertySymbols(obj)) {
    specMap.set(symbolKey as keyof O, obj[symbolKey as keyof O] as unknown as Type<unknown>);
  }

  return specMap;
}

/**
 * Creates a type of an object with known properties and their types.
 * @param spec Map of property of the expected object type to the type of that property.
 */
export function hasPropertiesType<REQ extends {}>(required: TypeSpec<REQ>): Type<REQ>;
export function hasPropertiesType<REQ extends {}, OPT extends {}>(
    required: TypeSpec<REQ>,
    optional: TypeSpec<OPT>,
): Type<REQ&Partial<OPT>>;
export function hasPropertiesType(required: TypeSpec<{}>, optional?: TypeSpec<{}>): Type<{}> {
  return new HasPropertiesType(
      convertToSpecMap(required),
      convertToSpecMap(optional ?? {}),
  );
}
