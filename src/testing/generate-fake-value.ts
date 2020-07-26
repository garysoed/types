import { Type } from '../core/type';
import { ArrayOfType, arrayOfType } from '../types/array-of-type';
import { BooleanType } from '../types/boolean-type';
import { ElementWithTagType } from '../types/element-with-tag-type';
import { EnumType } from '../types/enum-type';
import { EqualType } from '../types/equal-type';
import { HasPropertiesType } from '../types/has-properties-type';
import { IntersectType } from '../types/intersect-type';
import { IterableOfType } from '../types/iterable-of-type';
import { MapOfType } from '../types/map-of-type';
import { NumberType, numberType } from '../types/number-type';
import { SetOfType } from '../types/set-of-type';
import { StringRecordType } from '../types/string-record-type';
import { StringType, stringType } from '../types/string-type';
import { SymbolType } from '../types/symbol-type';
import { TupleOfType, tupleOfType } from '../types/tuple-of-type';
import { UndefinedType } from '../types/undefined-type';
import { UnionType } from '../types/union-type';

const MIN_ARRAY_SIZE = 1;
const MAX_ARRAY_SIZE = 3;

export function generateFakeValue<T>(type: Type<T>): T;
export function generateFakeValue(type: Type<any>): any {
  if (type instanceof ArrayOfType) {
    const targetSize = Math.floor(Math.random() * (MAX_ARRAY_SIZE - MIN_ARRAY_SIZE))
        + MIN_ARRAY_SIZE;
    const value = [];
    for (let i = 0; i < targetSize; i++) {
      value.push(generateFakeValue(type.elementType));
    }
    return value;
  } else if (type instanceof BooleanType) {
    return Math.floor(Math.random() * 2) === 0;
  } else if (type instanceof ElementWithTagType) {
    return document.createElement(type.tag);
  } else if (type instanceof EnumType) {
    return type.enumSet[0];
  } else if (type instanceof EqualType) {
    return type.value;
  } else if (type instanceof HasPropertiesType) {
    const value: {[key: string]: any} = {};
    for (const key of Object.getOwnPropertyNames(type.spec)) {
      value[key] = generateFakeValue(type.spec[key]);
    }
    return value;
  } else if (type instanceof IntersectType) {
    const values = type.types.map(t => generateFakeValue(t));
    const value = {};
    for (const v of values) {
      Object.assign(value, v);
    }
    return value;
  } else if (type instanceof IterableOfType) {
    return [generateFakeValue(type.type)];
  } else if (type instanceof MapOfType) {
    return new Map(
      generateFakeValue(arrayOfType(tupleOfType<[any, any]>([type.keyType, type.valueType]))),
    );
  } else if (type instanceof NumberType) {
    return Math.floor(Math.random() * 1000);
  } else if (type instanceof SetOfType) {
    return new Set(generateFakeValue(arrayOfType(type.elementType)));
  } else if (type instanceof StringRecordType) {
    return {
      [generateFakeValue(stringType)]: generateFakeValue(type.valueType),
    };
  } else if (type instanceof StringType) {
    return `test string ${generateFakeValue(numberType)}`;
  } else if (type instanceof SymbolType) {
    return Symbol(generateFakeValue(stringType));
  } else if (type instanceof TupleOfType) {
    return (type.spec as unknown as []).map(subtype => generateFakeValue(subtype));
  } else if (type instanceof UndefinedType) {
    return undefined;
  } else if (type instanceof UnionType) {
    return generateFakeValue(type.types[0]);
  }

  throw new Error(`Unsupported type: ${type}`);
}

