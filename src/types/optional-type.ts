import { Type } from '../core/type';

import { undefinedType } from './undefined-type';
import { unionType } from './union-type';


export function optionalType<T>(innerType: Type<T>): Type<T|undefined> {
  return unionType([
    innerType,
    undefinedType,
  ]);
}
