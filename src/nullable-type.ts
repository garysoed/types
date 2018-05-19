import { NullType } from './null-type';
import { Type } from './type';
import { UnionType } from './union-type';

/**
 * Creates a nullable type. Shortcut to UnionType([type, nullType]).
 * @param type Type of the object if not null.
 */
export function NullableType<T>(type: Type<T>): Type<T | null> {
  return UnionType([type, NullType]);
}
