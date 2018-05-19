import { Type } from './type';

/**
 * Creates a type of an object with known properties and their types.
 * @param spec Map of property of the expected object type to the type of that property.
 */
export function HasPropertiesType<OBJ>(spec: {[KEY in keyof OBJ]: Type<OBJ[KEY]>}): Type<OBJ> {
  return {
    check(target: any): target is OBJ {
      if (!(target instanceof Object)) {
        return false;
      }

      for (const key in spec) {
        if (!spec[key].check(target[key])) {
          return false;
        }
      }

      return true;
    },

    toString(): string {
      const entries: string[] = [];
      for (const key in spec) {
        if (spec.hasOwnProperty(key)) {
          entries.push(`${key}: ${spec[key]}`);
        }
      }

      return `{${entries.join(', ')}}`;
    },
  };
}
