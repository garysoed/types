import { Type } from '../core/type';
import { nullType } from './null-type';
import { unionType as unionType } from './union-type';

/**
 * Creates a nullable type. Shortcut to UnionType([type, nullType]).
 * @param type Type of the object if not null.
 */
export function nullableType<T>(type: Type<T>): Type<T|null> {
  return unionType([type, nullType]);
}
