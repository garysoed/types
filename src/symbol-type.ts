import { Type } from './type';

export const SymbolType: Type<symbol> = {
  check(target: any): target is symbol {
    return typeof target === 'symbol';
  },

  toString(): string {
    return 'symbol';
  },
};
