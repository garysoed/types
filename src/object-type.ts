import { InstanceofType } from './instanceof-type';
import { NumberType } from './number-type';
import { StringType } from './string-type';
import { Type } from './type';

/**
 * @internal
 */
class GenericObjectType<T> {
  constructor(
      private readonly keyType_: Type<any>,
      private readonly valueType_: Type<any>) { }

  check(target: any): target is T {
    if (!InstanceofType(Object).check(target)) {
      return false;
    }

    for (const key of Object.getOwnPropertyNames(target)) {
      if (!this.keyType_.check(key)) {
        return false;
      }

      if (!this.valueType_.check(target[key])) {
        return false;
      }
    }

    return true;
  }

  toString(): string {
    return `{[key: ${this.keyType_}]: ${this.valueType_}}`;
  }
}

export const ObjectType = {
  numberKeyed<V>(valueType: Type<V>): Type<{[key: number]: V}> {
    return new GenericObjectType<{[key: number]: V}>(NumberType, valueType);
  },

  stringKeyed<V>(valueType: Type<V>): Type<{[key: string]: V}> {
    return new GenericObjectType<{[key: string]: V}>(StringType, valueType);
  },
};
