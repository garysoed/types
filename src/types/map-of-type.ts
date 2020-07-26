import { Type } from '../core/type';
import { ValidationResult } from '../core/validation-result';
import { instanceofType } from './instanceof-type';
import { tupleOfType } from './tuple-of-type';

class MapType<K, V> extends Type<Map<K, V>> {
  private readonly entryType: Type<[K, V]> = tupleOfType<[K, V]>([this.keyType, this.valueType]);

  constructor(
      private readonly keyType: Type<K>,
      private readonly valueType: Type<V>,
  ) {
    super();
  }

  toString(): string {
    return `Map<${this.keyType}, ${this.valueType}>`;
  }

  validate(target: unknown): ValidationResult<Map<K, V>> {
    if (instanceofType(Map).check(target)) {
      for (const entry of target) {
        const result = this.entryType.validate(entry);
        if (!result.passes) {
          return {
            causes: [
              `entry with key ${entry[0]} is not of type ${this.entryType}`,
              ...result.causes,
            ],
            passes: false,
          };
        }
      }

      return {passes: true, value: target as Map<K, V>};
    } else {
      return {causes: ['not a map'], passes: false};
    }
  }
}

/**
 * Checks if the keys and values of the given map are all of the given type.
 *
 * @param keyType Type of the keys.
 * @param valueType Type of the values.
 * @param <K> Type of the key.
 * @param <V> Type of the value.
 * @return The map type.
 */
export function mapOfType<K, V>(keyType: Type<K>, valueType: Type<V>): Type<Map<K, V>> {
  return new MapType(keyType, valueType);
}
