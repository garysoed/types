import { BooleanType } from './boolean-type';
import { Type } from './core/type';
import { NumberType } from './number-type';
import { StringType } from './string-type';
import { SymbolType } from './symbol-type';
import { UnionType } from './union-type';

export const NativeType: Type<boolean|number|string|symbol> = UnionType([
  BooleanType,
  NumberType,
  StringType,
  SymbolType,
]);
