import {Type} from '../core/type';

import {booleanType} from './boolean-type';
import {numberType} from './number-type';
import {stringType} from './string-type';
import {symbolType} from './symbol-type';
import {undefinedType} from './undefined-type';
import {unionType} from './union-type';

export const nativeType: Type<boolean|number|string|symbol|undefined> = unionType([
  booleanType,
  numberType,
  stringType,
  symbolType,
  undefinedType,
]);
